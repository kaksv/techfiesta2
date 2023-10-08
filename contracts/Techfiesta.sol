// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract TechFiesta {
    string private message;
    constructor(string memory _message) payable{
        message = _message;
        
    }

    function setMessage (string memory _message) public {
        message = _message;
    }

    function getmessage() public view returns (string memory) {
        return message;
    }
}