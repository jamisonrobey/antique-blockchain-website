// SPDX-License-Identifier: MIT
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

    event AntiqueAdded(
        uint256 indexed id,
        string name,
        string category,
        string period
    );
    event AntiquesFetched(AntiqueObject[] antiques);

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

    function addAntique(
        string memory name,
        string memory description,
        string memory categoryStr,
        string memory periodStr,
        address antiqueOwner,
        bool availability,
        string memory image
    ) public onlyOwner {
        Category category = stringToCategory(categoryStr);
        Period period = stringToPeriod(periodStr);
        uint256 id = antiques.length; // Get the new id based on the current length of the antiques array
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

    function getAntiques(
        uint256 pageNumber,
        string memory categoryStr,
        string memory periodStr,
        bool available
    ) external view returns (AntiqueObject[] memory) {
        require(antiques.length > 0, "There are no antiques stored");

        /* Handle special all keyword */
        bool matchAllCategories = keccak256(abi.encodePacked(categoryStr)) ==
            keccak256(abi.encodePacked("all"));
        bool matchAllPeriods = keccak256(abi.encodePacked(periodStr)) ==
            keccak256(abi.encodePacked("all"));

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

        /* Calculate the start and end indices for the requested page */
        uint256 itemsPerPage = 10;
        uint256 startIndex = (pageNumber - 1) * itemsPerPage;
        uint256 endIndex = startIndex + itemsPerPage;

        /* Ensure the end index doesn't exceed the matched antiques count */
        if (endIndex > matchedCount) {
            endIndex = matchedCount;
        }

        AntiqueObject[] memory paginatedAntiquesObjects = new AntiqueObject[](
            endIndex - startIndex
        );
        uint256 paginatedCount = 0;
        for (uint256 i = startIndex; i < endIndex; i++) {
            AntiqueObject memory antiqueObject = AntiqueObject({
                id: matchedAntiques[i].id,
                name: matchedAntiques[i].name,
                description: matchedAntiques[i].description,
                category: categoryToString(matchedAntiques[i].category),
                period: periodToString(matchedAntiques[i].period),
                owner: matchedAntiques[i].owner,
                available: matchedAntiques[i].available,
                image: matchedAntiques[i].image
            });
            paginatedAntiquesObjects[paginatedCount] = antiqueObject;
            paginatedCount++;
        }

        return paginatedAntiquesObjects;
    }
}
