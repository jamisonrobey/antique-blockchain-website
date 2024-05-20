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

    function addAnqitue(
        string memory name,
        string memory categoryStr,
        string memory periodStr,
        address antiqueOwner,
        bool availability
    ) public onlyOwner {
        Category category = stringToCategory(categoryStr);
        Period period = stringToPeriod(periodStr);
        antiques.push(
            Antique(name, category, period, antiqueOwner, availability)
        );
    }

    function getAntique(uint256 index) public view returns (Antique memory) {
        require(index < antiques.length, "Invalid index");
        return antiques[index];
    }
}
