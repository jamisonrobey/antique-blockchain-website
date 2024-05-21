import { expect } from "chai";
import hre from "hardhat";

describe("AntiqueCertification", function () {
  it("Constructor", async function () {
    const antiqueCertificationBodyWalletAddr =
      "0xfb172542b405d0685bd29c3f4386159e76d9330b".toLowerCase();

    // deploy an AntiqueCertification contract with this wallet address and check the address stored on the contract
    const antiqueCertification = await hre.ethers.deployContract(
      "AntiqueCertification",
      [antiqueCertificationBodyWalletAddr]
    );

    // test
    expect(
      await antiqueCertification
        .antiqueCertificationBody()
        .then((addr) => addr.toLowerCase()) // annoying case sensitivity probably better way to do this!
    ).to.equal(antiqueCertificationBodyWalletAddr);
  });
});
