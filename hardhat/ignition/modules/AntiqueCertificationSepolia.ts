import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
/* Sepolia network is expensive to deploy antiques to so we don't start off with any unlike AntiqueCertificationLocal*/
const AntiqueCertificationModule = buildModule(
  "AntiqueCertificationModule",
  (m) => {
    const antiqueCertificationContract = m.contract("AntiqueCertification");
    return { antiqueCertificationContract };
  }
);

module.exports = AntiqueCertificationModule;
