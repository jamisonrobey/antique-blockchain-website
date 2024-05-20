// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

enum Category {
    All,
    Furniture,
    Pottery,
    Glassware,
    Collectables
}
enum Circa {
    All,
    Pre1700s,
    _1700s,
    _1800s,
    _1900s,
    _2000s
}
enum Availability {
    All,
    Available,
    Unavailable
}

struct Antique {
    uint256 id;
    string name;
    Category category;
    Circa circa;
    Availability availability;
    string image;
    bool available;
}

