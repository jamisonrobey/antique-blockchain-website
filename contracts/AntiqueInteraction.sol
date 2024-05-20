import "./AntiqueCertification.sol";
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AntiqueInteraction is AntiqueCertification {
    function getAntiques(
        uint256 numAntiques,
        string memory categoryStr,
        string memory periodStr,
        bool available
    ) external view returns (Antique[] memory) {
        require(
            numAntiques <= antiques.length,
            "You're retrieving more antiques than there are stored"
        );
        require(antiques.length > 0, "There are no antiques stored");


        /* Handle special 'all' keyword  */
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

        Antique[] memory tempArray = new Antique[](numAntiques);
        uint256 count = 0;

        for (uint256 i = 0; i < antiques.length; i++) {
            /* Build the matcher i.e. all or check if attribute matches */
            bool categoryMatches = matchAllCategories ||
                antiques[i].category == category;
            bool periodMatches = matchAllPeriods ||
                antiques[i].period == period;
            bool availabilityMatches = antiques[i].available == available;

            if (categoryMatches && periodMatches && availabilityMatches) {
                if (count < numAntiques) {
                    tempArray[count] = antiques[i];
                    count++;
                } else {
                    break;
                }
            }
        }

        Antique[] memory resultArray = new Antique[](count);
        for(uint256 j = 0; j < count; j++) {
            resultArray[j] = tempArray[j];
        }

        return resultArray;
    }
}
