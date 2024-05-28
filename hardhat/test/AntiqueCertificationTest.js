const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AntiqueCertification", function () {
  let AntiqueCertification;
  let antiqueCertification;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();

    const AntiqueCertificationFactory = await ethers.getContractFactory("AntiqueCertification");
    antiqueCertification = await AntiqueCertificationFactory.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await antiqueCertification.antiqueCertificationBody()).to.equal(owner.address);
    });
  });

  describe("Transactions", function () {
    it("Should add an antique", async function () {
      const addTx = await antiqueCertification.addAntique(
        "Antique Vase",
        "A beautiful ancient vase.",
        "Pottery",
        "1800s",
        addr1.address,
        true,
        "image_hash"
      );

      await addTx.wait();

      const antique = await antiqueCertification.getAntiqueById(0);
      expect(antique.name).to.equal("Antique Vase");
      expect(antique.description).to.equal("A beautiful ancient vase.");
      expect(antique.category).to.equal("Pottery");
      expect(antique.period).to.equal("1800s");
      expect(antique.owner).to.equal(addr1.address);
      expect(antique.available).to.be.true;
      expect(antique.image).to.equal("image_hash");
    });

    it("Should fetch antiques based on pagination", async function () {
      for (let i = 0; i < 10; i++) {
        await antiqueCertification.addAntique(
          `Antique ${i}`,
          `Description ${i}`,
          "Pottery",
          "1800s",
          addr1.address,
          true,
          "image_hash"
        );
      }
    
      const totalPages = Math.ceil(10 / 5);
      for (let page = 1; page <= totalPages; page++) {
        const antiques = await antiqueCertification.getAntiques(page, "all", "all", true);
        const expectedAntiquesPerPage = Math.min(5, 10 - (page - 1) * 5);
        expect(antiques.length).to.equal(expectedAntiquesPerPage);
      }
    });
        

    it("Should fetch antiques based on category and period", async function () {
      await antiqueCertification.addAntique(
        "Antique Vase",
        "A beautiful ancient vase.",
        "Pottery",
        "1800s",
        addr1.address,
        true,
        "image_hash"
      );

      await antiqueCertification.addAntique(
        "Ancient Coin",
        "A rare ancient coin.",
        "Collectibles",
        "1900s",
        addr1.address,
        true,
        "image_hash"
      );

      const antiques = await antiqueCertification.getAntiques(1, "Pottery", "1800s", true);
      expect(antiques.length).to.equal(1);
      expect(antiques[0].name).to.equal("Antique Vase");
    });
  });

  describe("Access Control", function () {
    it("Should only allow owner to add an antique", async function () {
      await expect(
        antiqueCertification.connect(addr1).addAntique(
          "Antique Vase",
          "A beautiful ancient vase.",
          "Pottery",
          "1800s",
          addr1.address,
          true,
          "image_hash"
        )
      ).to.be.revertedWith("Only allowed by antique certification body.");
    });
  });

  describe("Error Handling", function () {
    it("Should handle fetching antiques when there are none stored", async function () {
      expect(await antiqueCertification.antiques.length).to.equal(0);

      await expect(antiqueCertification.getAntiques(1, "all", "all", true)).to.be.revertedWith("There are no antiques stored");
    });

    it("Should handle fetching antiques with invalid category or period", async function () {
      await antiqueCertification.addAntique(
        "Antique Vase",
        "A beautiful ancient vase.",
        "Pottery",
        "1800s",
        addr1.address,
        true,
        "image_hash"
      );

      await expect(antiqueCertification.getAntiques(1, "InvalidCategory", "1800s", true)).to.be.revertedWith("Invalid category");
      await expect(antiqueCertification.getAntiques(1, "Pottery", "InvalidPeriod", true)).to.be.revertedWith("Invalid period");
    });
  });
});
