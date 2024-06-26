// SPDX-License-Identifier: MIT

// Represent an antique object with relevant properties
struct AntiqueObject {
    uint256 id;
    string name;
    string description;
    string category;
    string period;
    address owner;
    bool available;
    string image;
}

pragma solidity 0.8.18;

import "./utils.sol";

contract AntiqueCertification is Utils {
    address public antiqueCertificationBody;
    Antique[] public antiques;
    event OwnerChanged(
        uint256 indexed antiqueId,
        address indexed oldOwner,
        address indexed newOwner,
        uint256 timestamp
    );

    event AntiqueAdded(
        uint256 indexed id,
        string name,
        string category,
        string period
    );

    // Constructor to set the certification body to the contract deployer
    constructor() {
        antiqueCertificationBody = msg.sender;
    }

    modifier onlyCertBody() {
        require(
            antiqueCertificationBody == msg.sender,
            "Only allowed by antique certification body."
        );
        _;
    }

    modifier onlyOwner(uint256 antiqueId) {
        require(antiqueId < antiques.length, "Invalid antique ID");
        require(
            msg.sender == antiques[antiqueId].owner,
            "Only allowed by antique owner."
        );
        _;
    }

    function addAntique(
        string memory name,
        string memory description,
        string memory categoryStr,
        string memory periodStr,
        address antiqueOwner,
        bool availability,
        string memory image
    ) public onlyCertBody {
        Category category = stringToCategory(categoryStr);
        Period period = stringToPeriod(periodStr);
        uint256 id = antiques.length;
        antiques.push(
            Antique(
                id,
                name,
                description,
                category,
                period,
                antiqueOwner,
                availability,
                image
            )
        );
        emit AntiqueAdded(id, name, categoryStr, periodStr);
    }

    // Function to retrieve antique by its ID
    function getAntiqueById(
        uint256 id
    ) external view returns (AntiqueObject memory) {
        require(id < antiques.length && id >= 0, "Invalid ID");
        return
            AntiqueObject({
                id: id,
                name: antiques[id].name,
                description: antiques[id].description,
                category: categoryToString(antiques[id].category),
                period: periodToString(antiques[id].period),
                owner: antiques[id].owner,
                available: antiques[id].available,
                image: antiques[id].image
            });
    }

    // Function to get a paginated list of antiques based on provided criteria
    function getAntiques(
        uint256 pageNumber,
        string memory categoryStr,
        string memory periodStr,
        string memory availability // Changed to string
    ) external view returns (AntiqueObject[] memory) {
        require(antiques.length > 0, "There are no antiques stored");

        /* Handle special "all" keyword */
        bool matchAllCategories = keccak256(abi.encodePacked(categoryStr)) ==
            keccak256(abi.encodePacked("all"));
        bool matchAllPeriods = keccak256(abi.encodePacked(periodStr)) ==
            keccak256(abi.encodePacked("all"));
        bool available = stringToAvailability(availability); // Convert availability string to boolean

        /* default value */
        Category category = Category(0);
        Period period = Period(0);

        if (!matchAllCategories) {
            category = stringToCategory(categoryStr);
        }
        if (!matchAllPeriods) {
            period = stringToPeriod(periodStr);
        }

        /* Filter antiques based on the provided criteria */
        uint256 matchedCount = 0;
        for (uint256 i = 0; i < antiques.length; i++) {
            bool categoryMatches = matchAllCategories ||
                antiques[i].category == category;
            bool periodMatches = matchAllPeriods ||
                antiques[i].period == period;
            bool availabilityMatches = antiques[i].available == available;

            if (categoryMatches && periodMatches && availabilityMatches) {
                matchedCount++;
            }
        }

        /* Calculate the start and end indices for the requested page */
        uint256 itemsPerPage = 5;
        uint256 startIndex = (pageNumber - 1) * itemsPerPage;
        uint256 endIndex = startIndex + itemsPerPage;

        /* Ensure the end index doesn't exceed the matched antiques count */
        require(startIndex <= matchedCount, "end");
        if (endIndex > matchedCount) {
            endIndex = matchedCount;
        }

        AntiqueObject[] memory paginatedAntiquesObjects = new AntiqueObject[](
            endIndex - startIndex
        );
        uint256 paginatedCount = 0;
        for (uint256 i = 0; i < antiques.length; i++) {
            bool categoryMatches = matchAllCategories ||
                antiques[i].category == category;
            bool periodMatches = matchAllPeriods ||
                antiques[i].period == period;
            bool availabilityMatches = antiques[i].available == available;

            if (categoryMatches && periodMatches && availabilityMatches) {
                if (paginatedCount >= startIndex && paginatedCount < endIndex) {
                    AntiqueObject memory antiqueObject = AntiqueObject({
                        id: antiques[i].id,
                        name: antiques[i].name,
                        description: antiques[i].description,
                        category: categoryToString(antiques[i].category),
                        period: periodToString(antiques[i].period),
                        owner: antiques[i].owner,
                        available: antiques[i].available,
                        image: antiques[i].image
                    });
                    paginatedAntiquesObjects[
                        paginatedCount - startIndex
                    ] = antiqueObject;
                }
                paginatedCount++;
            }
        }

        return paginatedAntiquesObjects;
    }

    function changeOwner(
        uint256 antiqueId,
        address newOwner
    ) external onlyOwner(antiqueId) {
        require(newOwner != address(0), "New owner cannot be the zero address");

        Antique storage antique = antiques[antiqueId];
        address oldOwner = antique.owner;
        antique.owner = newOwner;

        emit OwnerChanged(antiqueId, oldOwner, newOwner, block.timestamp);
    }
}
