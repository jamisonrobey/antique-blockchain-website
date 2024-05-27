// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./utils.sol";

contract AntiqueVerification is Utils {
    Antique[] public antiques;

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
