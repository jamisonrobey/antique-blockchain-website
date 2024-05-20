// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./AntiqueCertificationIssuance.sol";

contract AntiqueVerification {
    AntiqueCertificationIssuance antiqueCertificationIssuance;

    constructor(address antiqueCertificationAddress) {
        antiqueCertificationIssuance = AntiqueCertificationIssuance(antiqueCertificationAddress);
    }

    function verifyCertification(uint256 antiqueId) external view returns (
        uint256 id,
        string memory name,
        AntiqueCertificationIssuance.Category category,
        AntiqueCertificationIssuance.Circa circa,
        AntiqueCertificationIssuance.Availability availability,
        string memory image,
        bool available,
        address owner
    ) {
        require(antiqueId > 0 && antiqueId <= antiqueCertificationIssuance.nextId() - 1, "Invalid antique ID");

        (
            id,
            name,
            category,
            circa,
            availability,
            image,
            available
        ) = antiqueCertificationIssuance.getAntiqueDetails(antiqueId);

        owner = antiqueCertificationIssuance.getAntiqueOwner(antiqueId);

        return (
            id,
            name,
            category,
            circa,
            availability,
            image,
            available,
            owner
        );
    }
}
