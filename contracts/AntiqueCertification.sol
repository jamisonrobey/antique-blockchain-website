import "./utils.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueCreation is Utils {
    address private antiqueCertificationBody;
    Antique[] private antiques;

    constructor() {
        antiqueCertificationBody = msg.sender;
    }

    modifier onlyOwner() {
        require(
            antiqueCertificationBody == msg.sender,
            "Only allowed by antique certification body."
        );
        _;
    }
}
