// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueVerification {
    struct Certification {
        address ownerAddress;
        string artifactName;
        uint256 certificationDate;
        bool isCertified;
    }
    
    mapping(uint256 => Certification) public certifications;
    uint256 public certificationCount;
    
    event CertificationVerified(address indexed owner, string artifactName, uint256 certificationDate);
    
    function verifyCertification(address _owner, string memory _artifactName, uint256 _certificationDate) public {
        certifications[certificationCount] = Certification({
            ownerAddress: _owner,
            artifactName: _artifactName,
            certificationDate: _certificationDate,
            isCertified: true
        });
        
        certificationCount++;
        emit CertificationVerified(_owner, _artifactName, _certificationDate);
    }
}
