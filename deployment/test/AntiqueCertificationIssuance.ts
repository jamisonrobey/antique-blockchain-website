// import { ethers } from "hardhat";
// import { Signer } from "ethers";
// import { expect } from "chai";

// describe("AntiqueCertificationIssuance", function () {
//   let AntiqueCertificationIssuance: any;
//   let antiqueCertificationIssuance: any;
//   let owner: Signer;
//   let addr1: Signer;
//   let addr2: Signer;

//   beforeEach(async function () {
//     [owner, addr1, addr2] = await ethers.getSigners();
//     AntiqueCertificationIssuance = await ethers.getContractFactory("AntiqueCertificationIssuance");
//     antiqueCertificationIssuance = await AntiqueCertificationIssuance.deploy();
//   });

//   it("should issue certification for an antique", async function () {
//     console.log("Sending transaction to address:", await antiqueCertificationIssuance.address);

//     await antiqueCertificationIssuance.connect(addr1).issueCertification(
//       "Example Antique",
//       0, // Category
//       1, // Circa
//       1, // Availability
//       "https://example.com/image.jpg"
//     );

//     const issuedAntique = await antiqueCertificationIssuance.getAntiqueDetails(1);

//     expect(issuedAntique.name).to.equal("Example Antique");
//     expect(issuedAntique.category).to.equal(0);
//     expect(issuedAntique.circa).to.equal(1);
//     expect(issuedAntique.availability).to.equal(1);
//     expect(issuedAntique.image).to.equal("https://example.com/image.jpg");
//     expect(issuedAntique.available).to.be.true;
//   });

//   it("should change owner of an antique", async function () {
//     console.log("Sending transaction to address:", await antiqueCertificationIssuance.address);

//     await antiqueCertificationIssuance.connect(addr1).issueCertification(
//       "Example Antique",
//       0,
//       1,
//       1,
//       "https://example.com/image.jpg"
//     );

//     await antiqueCertificationIssuance.connect(addr1).changeOwner(1, await addr2.getAddress());

//     const ownerAddress = await antiqueCertificationIssuance.getAntiqueOwner(1);
//     expect(ownerAddress).to.equal(await addr2.getAddress());
//   });
// });
