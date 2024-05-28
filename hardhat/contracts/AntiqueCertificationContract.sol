/* // SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils.sol";

contract AntiqueCertificationContract is Utils {
    address public antiqueCertificationBody;
    Antique[] public antiques;

    event AntiqueAdded(uint256 indexed id, string name, address indexed owner);
    event AntiqueUpdated(uint256 indexed id, string name, address indexed owner);
    event OwnershipTransferred(uint256 indexed id, address indexed oldOwner, address indexed newOwner);
    event AntiqueRemoved(uint256 indexed id);
    event AvailabilitySet(uint256 indexed id, bool availability);

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

    modifier onlyAntiqueOwner(uint256 antiqueId) {
        require(
            antiques[antiqueId].owner == msg.sender,
            "Only allowed by antique owner."
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
        uint256 id = antiques.length;
        antiques.push(
            Antique(
                id,
                name,
                category,
                period,
                antiqueOwner,
                availability
            )
        );
        emit AntiqueAdded(id, name, antiqueOwner);
    }

    function updateAntique(
        uint256 antiqueId,
        string memory name,
        string memory categoryStr,
        string memory periodStr,
        address antiqueOwner,
        bool availability
    ) public onlyOwner {
        require(antiqueId < antiques.length, "Antique does not exist");
        Category category = stringToCategory(categoryStr);
        Period period = stringToPeriod(periodStr);
        antiques[antiqueId] = Antique(
            antiqueId,
            name,
            category,
            period,
            antiqueOwner,
            availability
        );
        emit AntiqueUpdated(antiqueId, name, antiqueOwner);
    }

    function transferOwnership(uint256 antiqueId, address newOwner) public onlyAntiqueOwner(antiqueId) {
        address oldOwner = antiques[antiqueId].owner;
        antiques[antiqueId].owner = newOwner;
        emit OwnershipTransferred(antiqueId, oldOwner, newOwner);
    }

    function removeAntique(uint256 antiqueId) public onlyOwner {
        require(antiqueId < antiques.length, "Antique does not exist");
        for (uint256 i = antiqueId; i < antiques.length - 1; i++) {
            antiques[i] = antiques[i + 1];
            antiques[i].id = i;
        }
        antiques.pop();
        emit AntiqueRemoved(antiqueId);
    }

    function setAvailability(uint256 antiqueId, bool availability) public {
        require(
            msg.sender == antiques[antiqueId].owner || msg.sender == antiqueCertificationBody,
            "Only allowed by antique owner or certification body."
        );
        antiques[antiqueId].available = availability;
        emit AvailabilitySet(antiqueId, availability);
    }

    function getAntiques(
        uint256 pageNumber,
        string memory categoryStr,
        string memory periodStr,
        bool available
    ) external view returns (Antique[] memory) {
        require(antiques.length > 0, "There are no antiques stored");

        bool matchAllCategories = keccak256(abi.encodePacked(categoryStr)) ==
            keccak256(abi.encodePacked("all"));
        bool matchAllPeriods = keccak256(abi.encodePacked(periodStr)) ==
            keccak256(abi.encodePacked("all"));

        Category category = Category(0);
        Period period = Period(0);

        if (!matchAllCategories) {
            category = stringToCategory(categoryStr);
        }
        if (!matchAllPeriods) {
            period = stringToPeriod(periodStr);
        }

        Antique[] memory matchedAntiques = new Antique[](antiques.length);
        uint256 matchedCount = 0;

        for (uint256 i = 0; i < antiques.length; i++) {
            bool categoryMatches = matchAllCategories ||
                antiques[i].category == category;
            bool periodMatches = matchAllPeriods ||
                antiques[i].period == period;
            bool availabilityMatches = antiques[i].available == available;

            if (categoryMatches && periodMatches && availabilityMatches) {
                matchedAntiques[matchedCount] = antiques[i];
                matchedCount++;
            }
        }

        uint256 itemsPerPage = 10;
        uint256 startIndex = (pageNumber - 1) * itemsPerPage;
        uint256 endIndex = startIndex + itemsPerPage;

        if (endIndex > matchedCount) {
            endIndex = matchedCount;
        }

        Antique[] memory paginatedAntiques = new Antique[](
            endIndex - startIndex
        );
        uint256 paginatedCount = 0;

        for (uint256 i = startIndex; i < endIndex; i++) {
            paginatedAntiques[paginatedCount] = matchedAntiques[i];
            paginatedCount++;
        }

        return paginatedAntiques;
    }
}
 */