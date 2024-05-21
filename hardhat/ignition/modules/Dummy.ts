import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DummyModule = buildModule("AntiqueCertificationModule", (m) => {
  const dummy = m.contract("Dummy");
  return { dummy };
});

export default DummyModule;
