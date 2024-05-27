// import { expect } from "chai";
// import hre from "hardhat";
// import { ethers } from "hardhat";
// import { AntiqueCertificationIssuance } from "../typechain-types/AntiqueCertificationIssuance"; // Importing the AntiqueCertificationIssuance contract interface
// import { AntiqueVerification } from "../typechain-types/AntiqueVerification"; // Importing the AntiqueVerification contract interface

// describe("AntiqueVerification", function () {
//   let antiqueCertificationIssuance: AntiqueCertificationIssuance;
//   let antiqueVerification: AntiqueVerification;

//   beforeEach(async function () {
//     // Deploy the AntiqueCertificationIssuance contract
//     antiqueCertificationIssuance = await hre.ethers.getContractAt(
//       "AntiqueCertificationIssuance", // Interface name
//       "ADDRESS_OF_CERTIFICATION_CONTRACT" // Replace with the actual deployed certification contract address
//     );

//     // Deploy the AntiqueVerification contract
//     const AntiqueVerificationFactory = await ethers.getContractFactory("AntiqueVerification");
//     antiqueVerification = await AntiqueVerificationFactory.deploy(
//       antiqueCertificationIssuance.address
//     );

//     await antiqueVerification.deployed();
//   });

//   it("should verify certification for an antique", async function () {
//     await antiqueCertificationIssuance.issueCertification(
//       "Example Antique",
//       0,
//       1,
//       1,
//       "https://example.com/image.jpg"
//     );

//     const antiqueId = 1;

//     const verifiedAntique = await antiqueVerification.verifyCertification(antiqueId);

//     expect(verifiedAntique.name).to.equal("Example Antique");
//     expect(verifiedAntique.category).to.equal(0);
//     expect(verifiedAntique.circa).to.equal(1);
//     expect(verifiedAntique.availability).to.equal(1);
//     expect(verifiedAntique.image).to.equal("https://example.com/image.jpg");
//     expect(verifiedAntique.available).to.be.true;
//   });

// });
