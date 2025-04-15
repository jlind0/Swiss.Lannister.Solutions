// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import {VRFConsumerBaseV2Plus} from "@chainlink/contracts/src/v0.8/vrf/dev/VRFConsumerBaseV2Plus.sol";
import {VRFV2PlusClient} from "@chainlink/contracts/src/v0.8/vrf/dev/libraries/VRFV2PlusClient.sol";
import './Tournament.sol';

contract PairingEngine is VRFConsumerBaseV2Plus{
    uint256 s_subscriptionId;
    address constant vrfCoordinator = 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B;
    bytes32 constant s_keyHash = 0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae;
    uint32 constant callbackGasLimit = 300000;
    uint16 constant requestConfirmations = 3;
    mapping (uint => address) vrfRequestToTournament;
    mapping (address => uint16) tournamentCurrentRound;
    error TournamentNotFound();
    constructor(uint256 subscriptionId) VRFConsumerBaseV2Plus (vrfCoordinator) {
        s_subscriptionId = subscriptionId;
    }
    function fulfillRandomWords(uint256 requestId, uint256[] calldata randomWords) 
    internal override {
        if(vrfRequestToTournament[requestId] == address(0))
            revert TournamentNotFound();
        Tournament t = Tournament(vrfRequestToTournament[requestId]);
        t.setRandomNumberForRound(randomWords[0], tournamentCurrentRound[vrfRequestToTournament[requestId]]);
    }
    error RandomAlreadyGeneratedForRound();
    function requestRandomForRound(address tournamentAddress, uint16 round) external{
        if(tournamentCurrentRound[tournamentAddress] >= round)
            revert RandomAlreadyGeneratedForRound();
        uint requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: s_keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: 1,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({nativePayment: true})
                    )
                })
            );
            vrfRequestToTournament[requestId] = tournamentAddress;
            tournamentCurrentRound[tournamentAddress] = round;
    }
}