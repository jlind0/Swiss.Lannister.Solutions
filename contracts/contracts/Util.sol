// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

library Util {
    struct TournamentResponse{
        string name;
        uint16 totalRounds;
        uint16 currentRound;
        address id;
        Player[] players;
        TournamentStatus status;
    }
    struct Player{
        string name;
        uint id;
        uint16 elo;
        uint32 score;
        Match[] matches;
    }
    struct Match{
        uint white;
        uint black;
        uint16 round;
        MatchResult result;
    }
    enum MatchResult{
        InPlay,
        White,
        Black,
        Draw,
        Bye
    }
    enum TournamentStatus{
        NotStarted,
        InProgress,
        Completed
    }
    function sort32(uint32[] memory arr) public pure returns (uint32[] memory) {
        uint n = arr.length;
        // Traverse through all array elements
        for (uint i = 0; i < n; i++) {
            // Last i elements are already in place
            for (uint j = 0; j < n - 1 - i; j++) {
                // Swap if the element found is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    uint32 temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    function sort16(uint16[] memory arr) public pure returns (uint16[] memory) {
        uint n = arr.length;
        // Traverse through all array elements
        for (uint i = 0; i < n; i++) {
            // Last i elements are already in place
            for (uint j = 0; j < n - 1 - i; j++) {
                // Swap if the element found is greater than the next element
                if (arr[j] > arr[j + 1]) {
                    uint16 temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }
    function uintToDigits(uint number) public pure returns (uint8[] memory result) {
        // Special case: if the number is zero, return an array with a single digit, zero.
        if (number == 0) {
            result[0] = 0;
            return result;
        }
        
        uint temp = number;
        uint digitsCount = 0;
        
        // First, count how many digits the number has.
        while (temp != 0) {
            digitsCount++;
            temp /= 10;
        }
        
        // Create an array in memory with the length equal to the number of digits.
        uint8[] memory digits = new uint8[](digitsCount);
        temp = number;
        
        // Extract each digit and store it in the array.
        // We fill the array from the end to ensure that the most significant digit ends up at index 0.
        for (uint i = digitsCount; i > 0; i--) {
            digits[i - 1] = uint8(temp % 10); // Get the least significant digit.
            temp /= 10;                // Remove the least significant digit.
        }
        
        return digits;
    }
    error Invalid();
    function joinDigits(uint8[] memory numbers, uint maxNumber, uint startIndex) pure 
        public 
        returns (uint value, uint length)
    {
        // Initialize the output.
        value = 0;
        length = 0;
        
        // Iterate over the digits array.
        for (uint i = startIndex; i < numbers.length; i++) {
            // Optional: Validate that each number is a proper digit.
            if(numbers[i] > 9) revert Invalid();
            
            // Calculate the candidate value if we add this digit.
            uint candidate = value * 10 + numbers[i];
            
            // If the candidate exceeds maxNumber, stop appending further digits.
            if (candidate >= maxNumber) {
                break;
            }
            
            // Otherwise, update the accumulated value and increment the length.
            value = candidate;
            length++;
        }
    }
}