// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueCertificationIssuance {
    enum Category { All, Furniture, Pottery, Glassware, Collectables }
    enum Circa { All, Pre1700s, _1700s, _1800s, _1900s, _2000s }
    enum Availability { All, Available, Unavailable }

    struct Antique {
        uint256 id;
        string name;
        Category category;
        Circa circa;
        Availability availability;
        string image;
        bool available;
    }

    Antique[] public antiques;
    mapping(uint256 => address) public antiqueToOwner;
    uint256 public nextId = 1;

    modifier onlyOwner(uint256 antiqueId) {
        require(msg.sender == antiqueToOwner[antiqueId], "Not the owner");
        _;
    }

    event OwnerChanged(uint256 indexed antiqueId, address indexed oldOwner, address indexed newOwner);
    event CertificationIssued(uint256 indexed antiqueId, address indexed owner);

    function issueCertification(
        string memory name,
        Category category,
        Circa circa,
        Availability availability,
        string memory image
    ) public {
        antiques.push(Antique({
            id: nextId,
            name: name,
            category: category,
            circa: circa,
            availability: availability,
            image: image,
            available: true
        }));
        antiqueToOwner[nextId] = msg.sender;
        emit CertificationIssued(nextId, msg.sender);
        nextId++;
    }

    function changeOwner(uint256 antiqueId, address newOwner) external onlyOwner(antiqueId) {
        address oldOwner = antiqueToOwner[antiqueId];
        antiqueToOwner[antiqueId] = newOwner;
        emit OwnerChanged(antiqueId, oldOwner, newOwner);
    }

    function getAntiques(uint256 startIndex, uint256 endIndex) external view returns (Antique[] memory) {
        require(startIndex < endIndex && endIndex <= antiques.length, "Invalid range");
        Antique[] memory result = new Antique[](endIndex - startIndex);
        for (uint256 i = startIndex; i < endIndex; i++) {
            result[i - startIndex] = antiques[i];
        }
        return result;
    }

    function getAntiqueDetails(uint256 antiqueId) external view returns (
        uint256 id,
        string memory name,
        Category category,
        Circa circa,
        Availability availability,
        string memory image,
        bool available
    ) {
        require(antiqueId > 0 && antiqueId <= antiques.length, "Invalid antique ID");
        Antique storage antique = antiques[antiqueId - 1];
        return (
            antique.id,
            antique.name,
            antique.category,
            antique.circa,
            antique.availability,
            antique.image,
            antique.available
        );
    }

    function getAntiqueOwner(uint256 antiqueId) external view returns (address) {
        require(antiqueId > 0 && antiqueId <= antiques.length, "Invalid antique ID");
        return antiqueToOwner[antiqueId];
    }
}
