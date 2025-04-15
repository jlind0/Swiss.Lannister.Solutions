// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Util.sol";
import "./PairingEngine.sol";
contract Tournament is Ownable {
    string public name;
    uint16 public totalRounds;
    uint16[] public roundIds;
    mapping(uint16 => uint8[]) roundRandoms;
    mapping(uint => uint[]) previousMatches;
    uint[] public playerIds;
    mapping (uint => Util.Player) players;
    Util.TournamentStatus public status;
    address pairingEngineAddress;
    bool waitingFulfilment;
    error AuthorizationError();
    modifier isFromPairingEngine() {
        if(msg.sender != pairingEngineAddress)revert AuthorizationError();
        _;
    }
    constructor(string memory _name, uint16 _totalRounds, address _pairingEngineAddress) Ownable(msg.sender){
        name = _name;
        totalRounds = _totalRounds;
        pairingEngineAddress = _pairingEngineAddress;
    }
    function getTournament() external view returns(Util.TournamentResponse memory response){
        response.name = name;
        response.totalRounds = totalRounds;
        response.currentRound = uint16(roundIds.length);
        Util.Player[] memory pls = new Util.Player[](playerIds.length);
        uint x = 0;
        while(x < playerIds.length){
            pls[x] = players[playerIds[x]];
            x++;
        }
        response.players = pls;
        response.status = status;
    }
    error PlayerAlreadyAdded();
    error PlayerNotFound();
    error CannotModifyPlayers();
    function addPlayer(string memory _name, uint _id, uint16 _elo) onlyOwner external{
        if(status != Util.TournamentStatus.NotStarted)
            revert CannotModifyPlayers();
        if(players[_id].id != 0)
            revert PlayerAlreadyAdded();
        playerIds.push(_id);
        players[_id].name = _name;
        players[_id].id = _id;
        players[_id].elo = _elo;
    }
    function removePlayer(uint _id) onlyOwner external{
        if(status != Util.TournamentStatus.NotStarted)
            revert CannotModifyPlayers();
        if(players[_id].id == 0)
            revert PlayerNotFound();
        uint x = 0;
        while(x < playerIds.length)
        {
            if(playerIds[x] == _id){
                playerIds[x] = playerIds[playerIds.length - 1];
                playerIds.pop();
                delete players[_id];
                break;
            }
            x++;
        }
    }
    function setRandomNumberForRound(uint _random, uint16 _round) public isFromPairingEngine{
        uint8[] memory digitArray = Util.uintToDigits(_random);
        roundRandoms[_round] = digitArray;
        waitingFulfilment = false;
    }
    error TournamentAlreadyStarted();
    function start() external onlyOwner{
        if(status != Util.TournamentStatus.NotStarted)
            revert TournamentAlreadyStarted();
        status = Util.TournamentStatus.InProgress;
        beginNextRound_Internal();
    }
    error AwaitingFulfillment();
    function beginNextRound_Internal() internal onlyOwner{
        if(waitingFulfilment)
            revert AwaitingFulfillment();
        if(roundIds.length > totalRounds && AreMatchesCompleted())
        {
            status = Util.TournamentStatus.Completed;
            return;
        }
        else if(AreMatchesCompleted()){
            roundIds.push(uint16(roundIds.length + 1));
            PairingEngine pe = PairingEngine(pairingEngineAddress);
            pe.requestRandomForRound(address(this), roundIds[roundIds.length - 1]);
            waitingFulfilment = true;
        }
    }
    function beginNextRound() external onlyOwner{
        beginNextRound_Internal();
    }
    function AreMatchesCompleted() private view returns(bool){
        if(roundIds.length > 0){
            uint x = 0;
            uint16 currentRound =  roundIds[roundIds.length - 1];
            while(x < playerIds.length){
                uint y = 0;
                Util.Player memory player = players[playerIds[x]];
                while (y < player.matches.length) {
                    Util.Match memory m = player.matches[y];
                    if(m.round == currentRound && m.result == Util.MatchResult.InPlay)
                        return false;
                    y++;
                }
                x++;
            }
        }
        return true;
    }
    error NotFulfilled();
    error InvalidResult();
    function scoreMatch(uint white, uint black, Util.MatchResult result) onlyOwner external{
        if(result == Util.MatchResult.InPlay)
            revert InvalidResult();
        uint16 currentRound =  roundIds[roundIds.length - 1];
        if(players[white].id == 0 || players[black].id == 0)
            revert PlayerNotFound();
        Util.Player storage playerWhite = players[white];
        Util.Player storage playerBlack = players[black];
        uint x = 0;
        while(x < playerWhite.matches.length){
            bool doBreak = false;
            if(playerWhite.matches[x].round == currentRound){
                Util.Match storage matchWhite = playerWhite.matches[x];
                uint y = 0;
                while(y < playerBlack.matches.length){
                    if(playerBlack.matches[y].round == currentRound){
                        Util.Match storage matchBlack = playerBlack.matches[y];
                        if(matchWhite.black == matchBlack.black && matchBlack.white == matchWhite.white){
                            if(matchWhite.result != Util.MatchResult.InPlay || matchBlack.result != Util.MatchResult.InPlay)
                                revert InvalidResult();
                            matchWhite.result = result;
                            matchBlack.result = result;
                            if (result == Util.MatchResult.White) {
                                playerWhite.score += 6;
                            } else if (result == Util.MatchResult.Black) {
                                playerBlack.score += 6;
                            } else if(result == Util.MatchResult.Draw) {
                                playerBlack.score += 3;
                                playerWhite.score += 3;
                            }
                            doBreak = true;
                            break;
                        }
                    }
                    y++;
                }
            }
            if(doBreak)
                break;
            x++;
        }
    }
    function isUsed(uint candidate, uint[] memory usedList, uint usedCount) internal pure returns (bool) {
        for (uint i = 0; i < usedCount; i++) {
            if (usedList[i] == candidate) {
                return true;
            }
        }
        return false;
    }
    function pairForCurrentRound() external onlyOwner{
        uint8[] memory randoms = roundRandoms[uint16(roundIds.length - 1)];
        if(waitingFulfilment || roundIds.length == 0 || randoms.length == 0)
            revert NotFulfilled();
        uint16[] memory elos = new uint16[](playerIds.length);
        uint32[] memory scores = new uint32[](playerIds.length);
        uint randomIndex = 0;
        uint x = 0;
        while(x < playerIds.length){
            Util.Player memory player = players[playerIds[x]];
            elos[x] = player.elo;
            scores[x] = player.score;
            x++;
        }
        elos = Util.sort16(elos);
        scores = Util.sort32(scores);
        
         // Temporary array to keep track of already paired player IDs.
        uint[] memory usedIds = new uint[](playerIds.length);
        uint usedCount = 0;
        // Variable to hold a pending candidate for pairing.
        uint pendingCandidate;
        bool hasPending = false;

        // Iterate over the sorted stats and select players for pairing.
        for (uint i = 0; i < playerIds.length; i++) {
            // Get candidates for the current (elo, score) pair.
            uint16 currentElo = elos[i];
            uint32 currentScore = scores[i];
            uint[] memory candidates = findPlayerIdsByStats(currentElo, currentScore);

            // Choose the first candidate not already paired.
            uint candidate = 0;
            bool candidateFound = false;
            if (candidates.length > 1) {
                // Generate a random number from the provided digits.
                // `Util.joinDigits` returns a random number and the number of digits it consumed.
                uint randomVal = 0; 
                uint consumed = 0;
                do{
                    (randomVal, consumed) = Util.joinDigits(randoms, candidates.length, randomIndex);
                    randomIndex += consumed;
                    // Wrap randomIndex if we've consumed all digits.
                    if (randomIndex >= randoms.length - 1)
                        randomIndex = 0;
                }
                while(randomVal < candidates.length);
                // Determine the starting index based on the random value modulo candidates.length.
                uint startIndex = randomVal % candidates.length;
                // Iterate over the candidates in a cyclic manner.
                for (uint j = 0; j < candidates.length; j++) {
                    uint candidateIndex = (startIndex + j) % candidates.length;
                    if (!isUsed(candidates[candidateIndex], usedIds, usedCount)) {
                        candidate = candidates[candidateIndex];
                        candidateFound = true;
                        break;
                    }
                }
            }   
            else{
                candidate = candidates[0];
                candidateFound = true;
            }
            // If no candidate was available, skip this stat entry.
            if (!candidateFound) {
                continue;
            }
            // Mark the candidate as used.
            usedIds[usedCount] = candidate;
            usedCount++;

            if (!hasPending) {
                // Set this candidate as pending.
                pendingCandidate = candidate;
                hasPending = true;
            } else {
                Util.Player storage pendingPlayer = players[pendingCandidate];
                Util.Player storage player = players[candidate];
                uint whitePlayer; uint blackPlayer; bool randomizeColor = false;
                if(pendingPlayer.matches.length > 0){
                    Util.Match memory lastPending = pendingPlayer.matches[pendingPlayer.matches.length - 1];
                    Util.Match memory last = player.matches[player.matches.length - 1];
                    if(lastPending.white == pendingCandidate && last.black == candidate)
                    {
                        whitePlayer = candidate;
                        blackPlayer = pendingCandidate;
                    }
                    else if(lastPending.black == pendingCandidate && last.white == candidate){
                        whitePlayer = pendingCandidate;
                        blackPlayer = candidate;
                    }
                    else
                        randomizeColor = true;
                }
                else {
                    randomizeColor = true;
                }
                if(randomizeColor){
                    if(randoms[randomIndex + 1] % 2 == 0){
                            whitePlayer = pendingCandidate;
                            blackPlayer = candidate;
                    }
                    else{
                        whitePlayer = candidate;
                        blackPlayer = pendingCandidate;
                    }
                    randomIndex++;
                    if (randomIndex >= randoms.length - 1)
                        randomIndex = 0;
                }
                // Pair the pending candidate with the current candidate.
                Util.Match memory m = Util.Match(whitePlayer, blackPlayer, 
                    uint16(roundIds[roundIds.length - 1]), Util.MatchResult.InPlay);
                
                pendingPlayer.matches.push(m);
                player.matches.push(m);
                previousMatches[pendingCandidate].push(candidate);
                previousMatches[candidate].push(pendingCandidate);
                hasPending = false;
            }
        }

        // If one candidate remains unpaired, assign a bye.
        if (hasPending) {
            players[pendingCandidate].score += 1; // e.g., award an extra point.
            players[pendingCandidate].matches.push(Util.Match(pendingCandidate, 
                pendingCandidate, uint16(roundIds[roundIds.length-1]), Util.MatchResult.Bye));
        }
    }
    function findPlayerIdsByStats(uint16 _elo, uint32 _score) internal view returns (uint[] memory) {
        uint count = 0;
        // First pass: count matches.
        for (uint i = 0; i < playerIds.length; i++) {
            uint id = playerIds[i];
            Util.Player memory p = players[id];
            if (p.elo == _elo && p.score == _score) {
                count++;
            }
        }
        // Allocate the candidate list.
        uint[] memory matchingIds = new uint[](count);
        uint index = 0;
        // Second pass: populate the candidate list.
        for (uint i = 0; i < playerIds.length; i++) {
            uint id = playerIds[i];
            Util.Player memory p = players[id];
            if (p.elo == _elo && p.score == _score) {
                matchingIds[index] = id;
                index++;
            }
        }
        return matchingIds;
    }
}