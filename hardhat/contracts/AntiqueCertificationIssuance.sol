// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils.sol";

contract AntiqueCertificationIssuance is Utils {
    address public antiqueCertificationBody;
    Antique[] public antiques;

    constructor(address _antiqueCertificationBody) {
        antiqueCertificationBody = _antiqueCertificationBody;
    }

    modifier onlyOwner() {
        require(
            antiqueCertificationBody == msg.sender,
            "Only allowed by antique certification body."
        );
        _;
    }

    function addAntique(
        string memory name,
        string memory categoryStr,
        string memory periodStr,
        address antiqueOwner,
        bool availability
    ) public onlyOwner {
        Category category = stringToCategory(categoryStr);
        Period period = stringToPeriod(periodStr);
        antiques.push(
            Antique(
                antiques.length,
                name,
                category,
                period,
                antiqueOwner,
                availability
            )
        );
    }
}
