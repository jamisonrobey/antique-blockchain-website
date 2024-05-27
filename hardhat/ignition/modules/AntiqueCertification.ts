import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const AntiqueCertificationModule = buildModule(
  "AntiqueCertificationModule",
  (m) => {
    const antiqueCertificationContract = m.contract("AntiqueCertification", [
      "0x29f9146174aaed443eec9cc3f43aac190c29f9f4",
    ]);
    return { antiqueCertificationContract };
  }
);

module.exports = AntiqueCertificationModule;
