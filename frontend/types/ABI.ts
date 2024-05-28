export const CERTIFICATION_ABI_PROD = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "period",
        type: "string",
      },
    ],
    name: "AntiqueAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct AntiqueObject[]",
        name: "antiques",
        type: "tuple[]",
      },
    ],
    name: "AntiquesFetched",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "categoryStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "periodStr",
        type: "string",
      },
      {
        internalType: "address",
        name: "antiqueOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "availability",
        type: "bool",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    name: "addAntique",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "antiqueCertificationBody",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "antiques",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "enum Category",
        name: "category",
        type: "uint8",
      },
      {
        internalType: "enum Period",
        name: "period",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getAntiqueById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        internalType: "struct AntiqueObject",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pageNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "categoryStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "periodStr",
        type: "string",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
    ],
    name: "getAntiques",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        internalType: "struct AntiqueObject[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const CERTIFICATION_ABI_DEV = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "period",
        type: "string",
      },
    ],
    name: "AntiqueAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct AntiqueObject[]",
        name: "antiques",
        type: "tuple[]",
      },
    ],
    name: "AntiquesFetched",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "categoryStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "periodStr",
        type: "string",
      },
      {
        internalType: "address",
        name: "antiqueOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "availability",
        type: "bool",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    name: "addAntique",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "antiqueCertificationBody",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "antiques",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "enum Category",
        name: "category",
        type: "uint8",
      },
      {
        internalType: "enum Period",
        name: "period",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getAntiqueById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        internalType: "struct AntiqueObject",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pageNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "categoryStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "periodStr",
        type: "string",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
    ],
    name: "getAntiques",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        internalType: "struct AntiqueObject[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const CERTIFICATION_CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "category",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "period",
        type: "string",
      },
    ],
    name: "AntiqueAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "antiqueId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "string",
        name: "categoryStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "periodStr",
        type: "string",
      },
      {
        internalType: "address",
        name: "antiqueOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "availability",
        type: "bool",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    name: "addAntique",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "antiqueCertificationBody",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "antiques",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "enum Category",
        name: "category",
        type: "uint8",
      },
      {
        internalType: "enum Period",
        name: "period",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "available",
        type: "bool",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "antiqueId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getAntiqueById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        internalType: "struct AntiqueObject",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pageNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "categoryStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "periodStr",
        type: "string",
      },
      {
        internalType: "string",
        name: "availability",
        type: "string",
      },
    ],
    name: "getAntiques",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "string",
            name: "category",
            type: "string",
          },
          {
            internalType: "string",
            name: "period",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "bool",
            name: "available",
            type: "bool",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
        ],
        internalType: "struct AntiqueObject[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
