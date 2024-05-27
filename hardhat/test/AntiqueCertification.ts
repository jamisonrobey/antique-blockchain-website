import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "hardhat";

describe("AntiqueCertification", function () {
  it("Constructor", async function () {
    const accounts = await ethers.getSigners();
    const owner = accounts[0];

    // deploy an AntiqueCertification contract with this wallet address and check the address stored on the contract
    const antiqueCertification = await hre.ethers.deployContract(
      "AntiqueCertification",
      [owner]
    );
    // test
    expect(await antiqueCertification.antiqueCertificationBody()).to.equal(
      owner
    );
  });
});
