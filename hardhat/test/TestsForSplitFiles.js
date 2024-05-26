const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AntiqueCertificationIssuance", function () {
  it("Constructor", async function () {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];

    const AntiqueVerification = await ethers.getContractFactory("AntiqueVerification");
    const antiqueVerification = await AntiqueVerification.deploy();

    console.log("Deploying AntiqueCertificationIssuance contract...");
    const AntiqueCertificationIssuance = await ethers.getContractFactory("AntiqueCertificationIssuance");
    const antiqueCertificationIssuance = await AntiqueCertificationIssuance.deploy(antiqueVerification.address);


    expect(await antiqueCertificationIssuance.antiqueCertificationBody()).to.equal(antiqueVerification.address);
  });

  it("should add antique correctly", async function () {
    const [owner] = await ethers.getSigners();

    const AntiqueVerification = await ethers.getContractFactory("AntiqueVerification");
    const antiqueVerification = await AntiqueVerification.deploy();

    const AntiqueCertificationIssuance = await ethers.getContractFactory("AntiqueCertificationIssuance");
    const antiqueCertificationIssuance = await AntiqueCertificationIssuance.deploy(antiqueVerification.address);

    await antiqueCertificationIssuance.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      owner.address,
      true
    );

    const antiques = await antiqueCertificationIssuance.getAntiques(1, "furniture", "1800s", true);

    expect(antiques.length).to.equal(1);
    expect(antiques[0].name).to.equal("Antique 1");
    expect(antiques[0].owner).to.equal(owner.address);
    expect(antiques[0].availability).to.equal(true);
  });

});
