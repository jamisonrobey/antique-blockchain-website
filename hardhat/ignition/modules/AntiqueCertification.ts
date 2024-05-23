import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
const AntiqueCertificationModule = buildModule(
  "AntiqueCertificationModule",
  (m) => {
    const antiqueCertificationContract = m.contract("AntiqueCertification");
    return { antiqueCertificationContract };
  }
);

module.exports = AntiqueCertificationModule;
