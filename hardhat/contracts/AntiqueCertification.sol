import "./utils.sol";

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueCertification is Utils {
    address public antiqueCertificationBody;
    Antique[] public antiques;

    constructor() {
        antiqueCertificationBody = 0x29F9146174aAEd443eEc9cC3F43aAc190C29f9F4;
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
        bool availability,
        string memory image
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
                availability,
                image
            )
        );
    }

    function getAntiques(
        uint256 pageNumber,
        string memory categoryStr,
        string memory periodStr,
        bool available
    ) external view returns (Antique[] memory) {
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

        /* Create a new array with the antiques for the requested page */
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
