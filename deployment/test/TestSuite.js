const { expect } = require("chai");
const { ethers } = require("hardhat");

async function getTestOwnerAddress() {
  const [owner] = await ethers.getSigners();
  return owner.address;
}

describe("AntiqueCertificationIssuance", function () {
  let issuanceContract;
  let owner;

  before(async function () {
    const CertificationIssuance = await ethers.getContractFactory("AntiqueCertificationIssuance");
    issuanceContract = await CertificationIssuance.deploy();
    owner = await getTestOwnerAddress();
  });

  it("Should issue a certification", async function () {
    await issuanceContract.issueCertification("Ancient Vase", { from: owner });

    const count = await issuanceContract.getCertificationCount();
    expect(count).to.equal(1);
  });

  it("Should revoke a certification", async function () {
    await issuanceContract.issueCertification("Ancient Coin", { from: owner });

    await issuanceContract.revokeCertification(1, { from: owner });

    const certificationDetails = await issuanceContract.getCertificationDetails(1);
    expect(certificationDetails.isCertified).to.be.false;
  });

  it("Should get certification details", async function () {
    await issuanceContract.issueCertification("Ancient Jewelry", { from: owner });

    const certificationDetails = await issuanceContract.getCertificationDetails(2);
    
    expect(certificationDetails.ownerAddress).to.equal(owner);
    expect(certificationDetails.artifactName).to.equal("Ancient Jewelry");
    expect(certificationDetails.certificationDate).to.exist;
    expect(certificationDetails.isCertified).to.be.true;
  });
});

describe("AntiqueVerification", function () {
    it("Should verify a certification", async function () {
      const Verification = await ethers.getContractFactory("AntiqueVerification");
      const verificationContract = await Verification.deploy();
  
      const owner = await getTestOwnerAddress();
      const artifactName = "Ancient Vase";
      const certificationDate = 1621669387;
  
      await verificationContract.verifyCertification(owner, artifactName, certificationDate);
  
      const certification = await verificationContract.certifications(0);
      expect(certification.ownerAddress).to.equal(owner);
      expect(certification.artifactName).to.equal(artifactName);
      expect(certification.certificationDate).to.equal(certificationDate);
      expect(certification.isCertified).to.be.true;
    });
  });