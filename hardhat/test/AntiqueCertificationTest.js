const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AntiqueCertificationTest", function () {
  it("Constructor", async function () {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];

    const AntiqueCertification = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertification.deploy(owner.address);

    expect(await antiqueCertification.antiqueCertificationBody()).to.equal(owner.address);
  });

  it("should add antique correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertification = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertification.deploy(owner.address);

    await antiqueCertification.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      addr1.address,
      true
    );

    const antiques = await antiqueCertification.getAntiques(1, "furniture", "1800s", true);

    expect(antiques.length).to.equal(1);
    expect(antiques[0].name).to.equal("Antique 1");
    expect(antiques[0].owner).to.equal(addr1.address);

  });

  it("should filter antiques correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertification = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertification.deploy(owner.address);

    await antiqueCertification.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      addr1.address,
      true
    );
    await antiqueCertification.connect(owner).addAntique(
      "Antique 2",
      "pottery",
      "1900s",
      addr1.address,
      true
    );

    const filteredAntiques = await antiqueCertification.getAntiques(1, "furniture", "1800s", true);

    expect(filteredAntiques.length).to.equal(1);
    expect(filteredAntiques[0].name).to.equal("Antique 1");
  });

  it("should paginate antiques correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertification = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertification.deploy(owner.address);

    for (let i = 1; i <= 15; i++) {
      await antiqueCertification.connect(owner).addAntique(
        `Antique ${i}`,
        "furniture",
        "1800s",
        addr1.address,
        true
      );
    }

    const antiquesPage1 = await antiqueCertification.getAntiques(1, "furniture", "1800s", true);
    expect(antiquesPage1.length).to.equal(10);

    const antiquesPage2 = await antiqueCertification.getAntiques(2, "furniture", "1800s", true);
    expect(antiquesPage2.length).to.equal(5);
  });
});
