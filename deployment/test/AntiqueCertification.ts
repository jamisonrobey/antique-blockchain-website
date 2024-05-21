import { expect } from "chai";
import hre from "hardhat";
import { ethers } from "hardhat";
import { AntiqueCertification } from "../typechain-types";

const CERTIFICATION_BODY_WALLET =
  "0xfb172542b405d0685bd29c3f4386159e76d9330b".toLowerCase();


describe("AntiqueCertification", function () {
  it("Constructor", async function () {
    if (!ethers.isAddress(CERTIFICATION_BODY_WALLET)) {
      console.error(
        "\x1b[31mError: CERTIFICATION_BODY_WALLET is not valid\x1b[0m. Check AntiqueCertification.ts"
      );
      process.exit(1);
    }


    // deploy an AntiqueCertification contract with this wallet address and check the address stored on the contract
    const antiqueCertification = await hre.ethers.deployContract(
      "AntiqueCertification",
      [CERTIFICATION_BODY_WALLET]
    );

    // test
    expect(
      await antiqueCertification
        .antiqueCertificationBody()
        .then((addr) => addr.toLowerCase()) // annoying case sensitivity probably better way to do this!
    ).to.equal(CERTIFICATION_BODY_WALLET);
  });
});
