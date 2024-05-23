// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueCertificationIssuance {
    address public owner;
    
    struct Certification {
        address ownerAddress;
        string artifactName;
        uint256 certificationDate;
        bool isCertified;
    }
    
    Certification[] public certifications;
    
    event CertificationIssued(address indexed owner, string artifactName, uint256 certificationDate);
    event CertificationRevoked(uint256 indexed index, string artifactName, uint256 revocationDate);
    
    constructor() {
        owner = msg.sender;
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }
    
    function issueCertification(string memory _artifactName) public onlyOwner {
        certifications.push(Certification({
            ownerAddress: msg.sender,
            artifactName: _artifactName,
            certificationDate: block.timestamp,
            isCertified: true
        }));
        
        emit CertificationIssued(msg.sender, _artifactName, block.timestamp);
    }
    
    function revokeCertification(uint256 _index) public onlyOwner {
        require(_index < certifications.length, "Invalid index");
        require(certifications[_index].isCertified, "Certification already revoked");
        
        certifications[_index].isCertified = false;
        emit CertificationRevoked(_index, certifications[_index].artifactName, block.timestamp);
    }
    
    function getCertificationCount() public view returns (uint256) {
        return certifications.length;
    }
    
    function getCertificationDetails(uint256 _index) public view returns (address ownerAddress, string memory artifactName, uint256 certificationDate, bool isCertified) {
        require(_index < certifications.length, "Invalid index");
        Certification memory cert = certifications[_index];
        return (cert.ownerAddress, cert.artifactName, cert.certificationDate, cert.isCertified);
    }
}
