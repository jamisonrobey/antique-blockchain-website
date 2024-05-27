const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AntiqueCertificationContractTest", function () {
  it("Constructor", async function () {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];

    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

    expect(await antiqueCertification.antiqueCertificationBody()).to.equal(owner.address);
  });

  it("should add antique correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

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
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

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
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

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

  it("should transfer ownership correctly", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

    await antiqueCertification.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      addr1.address,
      true
    );

    await antiqueCertification.connect(addr1).transferOwnership(0, addr2.address);

    const antiques = await antiqueCertification.getAntiques(1, "all", "all", true);

    expect(antiques.length).to.equal(1);
    expect(antiques[0].owner).to.equal(addr2.address);
  });

  it("should update antique correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

    await antiqueCertification.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      addr1.address,
      true
    );

    await antiqueCertification.connect(owner).updateAntique(
      0,
      "Updated Antique 1",
      "pottery",
      "1900s",
      addr1.address,
      false
    );

    const antiques = await antiqueCertification.getAntiques(1, "all", "all", true);

    expect(antiques.length).to.equal(0);

    const updatedAntiques = await antiqueCertification.getAntiques(1, "all", "all", false);
    expect(updatedAntiques.length).to.equal(1);
    expect(updatedAntiques[0].name).to.equal("Updated Antique 1");
    expect(updatedAntiques[0].category).to.equal(1); // Pottery
    expect(updatedAntiques[0].period).to.equal(2); // 1900s
  });

  it("should set availability correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

    await antiqueCertification.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      addr1.address,
      true
    );

    await antiqueCertification.connect(addr1).setAvailability(0, false);

    const antiques = await antiqueCertification.getAntiques(1, "all", "all", false);
    expect(antiques.length).to.equal(1);
    expect(antiques[0].available).to.be.false;
  });

  it("should remove antique correctly", async function () {
    const [owner, addr1] = await ethers.getSigners();
    const AntiqueCertificationContract = await ethers.getContractFactory("AntiqueCertification");
    const antiqueCertification = await AntiqueCertificationContract.deploy(owner.address);

    await antiqueCertification.connect(owner).addAntique(
      "Antique 1",
      "furniture",
      "1800s",
      addr1.address,
      true
    );

    let antiques = await antiqueCertification.getAntiques(1, "all", "all", true);
    expect(antiques.length).to.equal(1);

    await antiqueCertification.connect(owner).removeAntique(0);

    antiques = await antiqueCertification.getAntiques(1, "all", "all", true);
    expect(antiques.length).to.equal(0);
  });
});
