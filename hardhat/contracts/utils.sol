// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/* THIS CONTRACT IS NOT TO BE DEPLOYED:
    it is simply a contract that is inherited by AntiqueCreation and AntiqueInteraction contracts that provide helpful functions
*/

// Enumeration for antique categories
enum Category {
    Furniture,
    Pottery,
    Glassware,
    Collectibles
}

// Enumeration for antique periods
enum Period {
    Pre1700s,
    _1800s,
    _1700s,
    _1900s,
    _2000s
}

// Representing antique objects
struct Antique {
    uint256 id;
    string name;
    string description;
    Category category;
    Period period;
    address owner;
    bool available;
    string image;
}

// Contract providing helper functions for managing antique objects
contract Utils {
    /* Handy toLower() implementation from: https://gist.github.com/ottodevs/c43d0a8b4b891ac2da675f825b1d1dbf?permalink_comment_id=4976821#gistcomment-4976821 */
    function copyBytes(
        bytes memory _bytes
    ) private pure returns (bytes memory) {
        bytes memory copy = new bytes(_bytes.length);
        uint256 max = _bytes.length + 31;
        for (uint256 i = 32; i <= max; i += 32) {
            assembly {
                mstore(add(copy, i), mload(add(_bytes, i)))
            }
        }
        return copy;
    }

    function _toLowercase(
        string memory inputNonModifiable
    ) private pure returns (string memory) {
        bytes memory bytesInput = copyBytes(bytes(inputNonModifiable));

        for (uint i = 0; i < bytesInput.length; i++) {
            // checks for valid ascii characters // will allow unicode after building a string library
            require(
                uint8(bytesInput[i]) > 31 && uint8(bytesInput[i]) < 127,
                "Only ASCII characters"
            );
            // Uppercase character...
            if (uint8(bytesInput[i]) > 64 && uint8(bytesInput[i]) < 91) {
                // add 32 to make it lowercase
                bytesInput[i] = bytes1(uint8(bytesInput[i]) + 32);
            }
        }
        return string(bytesInput);
    }

    /* Helper functions for converting user string input to underlying enum types */

    function stringToCategory(
        string memory category
    ) internal pure returns (Category) {
        string memory lowerCategory = _toLowercase(category);
        if (
            keccak256(abi.encodePacked(lowerCategory)) ==
            keccak256(abi.encodePacked("furniture"))
        ) return Category.Furniture;
        else if (
            keccak256(abi.encodePacked(lowerCategory)) ==
            keccak256(abi.encodePacked("pottery"))
        ) return Category.Pottery;
        else if (
            keccak256(abi.encodePacked(lowerCategory)) ==
            keccak256(abi.encodePacked("glassware"))
        ) return Category.Glassware;
        else if (
            keccak256(abi.encodePacked(lowerCategory)) ==
            keccak256(abi.encodePacked("collectibles"))
        ) return Category.Collectibles;
        else revert("Invalid category");
    }

    function stringToPeriod(
        string memory period
    ) internal pure returns (Period) {
        string memory lowerPeriod = _toLowercase(period);
        if (
            keccak256(abi.encodePacked(lowerPeriod)) ==
            keccak256(abi.encodePacked("pre1700s"))
        ) return Period.Pre1700s;
        else if (
            keccak256(abi.encodePacked(lowerPeriod)) ==
            keccak256(abi.encodePacked("1700s"))
        ) return Period._1700s;
        else if (
            keccak256(abi.encodePacked(lowerPeriod)) ==
            keccak256(abi.encodePacked("1800s"))
        ) return Period._1800s;
        else if (
            keccak256(abi.encodePacked(lowerPeriod)) ==
            keccak256(abi.encodePacked("1900s"))
        ) return Period._1900s;
        else if (
            keccak256(abi.encodePacked(lowerPeriod)) ==
            keccak256(abi.encodePacked("2000s"))
        ) return Period._2000s;
        else revert("Invalid period");
    }

    /* Helpers to convert enum to string for output */

    function categoryToString(
        Category category
    ) internal pure returns (string memory) {
        if (category == Category.Furniture) return "Furniture";
        else if (category == Category.Pottery) return "Pottery";
        else if (category == Category.Glassware) return "Glassware";
        else return "Collectables";
    }

    function periodToString(
        Period period
    ) internal pure returns (string memory) {
        if (period == Period.Pre1700s) return "Pre1700s";
        if (period == Period._1700s) return "1700s";
        if (period == Period._1800s) return "1800s";
        if (period == Period._1900s) return "1900s";
        else return "2000s";
    }

    function stringToAvailability(
        string memory availability
    ) internal pure returns (bool) {
        string memory lowerAvailability = _toLowercase(availability);
        if (
            keccak256(abi.encodePacked(lowerAvailability)) ==
            keccak256(abi.encodePacked("all"))
        ) return true;
        else if (
            keccak256(abi.encodePacked(lowerAvailability)) ==
            keccak256(abi.encodePacked("available"))
        ) return true;
        else if (
            keccak256(abi.encodePacked(lowerAvailability)) ==
            keccak256(abi.encodePacked("unavailable"))
        ) return false;
        else revert("Invalid availability");
    }
}
