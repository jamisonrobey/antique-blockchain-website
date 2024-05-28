const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AntiqueCertification", function () {
  let AntiqueCertification, antiqueCertification, owner, addr1, addr2;

  beforeEach(async function () {
    AntiqueCertification = await ethers.getContractFactory("AntiqueCertification");
    [owner, addr1, addr2, _] = await ethers.getSigners();
    antiqueCertification = await AntiqueCertification.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await antiqueCertification.antiqueCertificationBody()).to.equal(owner.address);
    });
  });

  describe("Adding Antiques", function () {
    it("Should add an antique", async function () {
      await antiqueCertification.addAntique(
        "Ancient Vase",
        "A very old vase",
        "Pottery",
        "Pre1700s",
        addr1.address,
        true,
        "image_link"
      );
      const antique = await antiqueCertification.getAntiqueById(0);
      expect(antique.name).to.equal("Ancient Vase");
      expect(antique.owner).to.equal(addr1.address);
    });

    it("Should emit an event when an antique is added", async function () {
      await expect(
        antiqueCertification.addAntique(
          "Ancient Vase",
          "A very old vase",
          "Pottery",
          "Pre1700s",
          addr1.address,
          true,
          "image_link"
        )
      ).to.emit(antiqueCertification, "AntiqueAdded");
    });

    it("Should only allow certification body to add an antique", async function () {
      await expect(
        antiqueCertification.connect(addr1).addAntique(
          "Ancient Vase",
          "A very old vase",
          "Pottery",
          "Pre1700s",
          addr1.address,
          true,
          "image_link"
        )
      ).to.be.revertedWith("Only allowed by antique certification body.");
    });
  });

  describe("Getting Antiques", function () {
    beforeEach(async function () {
      await antiqueCertification.addAntique(
        "Ancient Vase",
        "A very old vase",
        "Pottery",
        "Pre1700s",
        addr1.address,
        true,
        "image_link"
      );
      await antiqueCertification.addAntique(
        "Old Chair",
        "A very old chair",
        "Furniture",
        "1700s",
        addr1.address,
        false,
        "image_link"
      );
    });

    it("Should retrieve an antique by its ID", async function () {
      const antique = await antiqueCertification.getAntiqueById(0);
      expect(antique.name).to.equal("Ancient Vase");
    });

    it("Should filter antiques by category and period", async function () {
      const antiques = await antiqueCertification.getAntiques(1, "Pottery", "Pre1700s", "all");
      expect(antiques.length).to.equal(1);
      expect(antiques[0].name).to.equal("Ancient Vase");
    });

    it("Should filter antiques by availability", async function () {
      const antiques = await antiqueCertification.getAntiques(1, "all", "all", "available");
      expect(antiques.length).to.equal(1);
      expect(antiques[0].name).to.equal("Ancient Vase");
    });

    it("Should paginate antiques", async function () {
      for (let i = 0; i < 10; i++) {
        await antiqueCertification.addAntique(
          `Antique ${i}`,
          "Description",
          "Collectibles",
          "1800s",
          addr1.address,
          true,
          "image_link"
        );
      }

      const antiquesPage1 = await antiqueCertification.getAntiques(1, "all", "all", "all");
      const antiquesPage2 = await antiqueCertification.getAntiques(2, "all", "all", "all");

      expect(antiquesPage1.length).to.equal(5);
      expect(antiquesPage2.length).to.equal(5);
    });
  });

  describe("Changing Owner", function () {
    beforeEach(async function () {
      await antiqueCertification.addAntique(
        "Ancient Vase",
        "A very old vase",
        "Pottery",
        "Pre1700s",
        addr1.address,
        true,
        "image_link"
      );
    });

    it("Should change the owner of an antique", async function () {
      await antiqueCertification.connect(addr1).changeOwner(0, addr2.address);
      const antique = await antiqueCertification.getAntiqueById(0);
      expect(antique.owner).to.equal(addr2.address);
    });

    it("Should emit an event when the owner is changed", async function () {
      await expect(
        antiqueCertification.connect(addr1).changeOwner(0, addr2.address)
      ).to.emit(antiqueCertification, "OwnerChanged");
    });

    it("Should only allow the current owner to change ownership", async function () {
      await expect(
        antiqueCertification.connect(addr2).changeOwner(0, addr1.address)
      ).to.be.revertedWith("Only allowed by antique owner.");
    });
  });
});
