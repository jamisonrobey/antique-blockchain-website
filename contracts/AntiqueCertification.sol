import "./utils.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueCertification is Utils {
    address private antiqueCertificationBody;
    Antique[] internal antiques;

    constructor() {
        antiqueCertificationBody = 0x0Ee81Eb6195A764193D8BAEC3ad59e40e1980777;
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

    function getAntique(uint256 index) private view returns (Antique memory) {
        require(index < antiques.length, "Invalid index");
        return antiques[index];
    }
}
