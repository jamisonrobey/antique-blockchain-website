// const { expect } = require("chai");
// const { ethers } = require("hardhat");

// describe("AntiqueVerification", function () {
//   let AntiqueCertificationIssuance;
//   let antiqueCertificationIssuance;
//   let AntiqueVerification;
//   let antiqueVerification;

//   beforeEach(async function () {
//     // Deploy AntiqueCertificationIssuance contract
//     AntiqueCertificationIssuance = await ethers.getContractFactory("AntiqueCertificationIssuance");
//     antiqueCertificationIssuance = await AntiqueCertificationIssuance.deploy();

//     // Deploy AntiqueVerification contract with the address of the AntiqueCertificationIssuance contract
//     AntiqueVerification = await ethers.getContractFactory("AntiqueVerification");
//     antiqueVerification = await AntiqueVerification.deploy(antiqueCertificationIssuance.address);
//   });

//   it("should set the correct address for AntiqueCertificationIssuance", async function () {
//     const storedAddress = await antiqueVerification.getAntiqueCertificationAddress();
//     expect(storedAddress).to.equal(antiqueCertificationIssuance.address);
//   });
// });
