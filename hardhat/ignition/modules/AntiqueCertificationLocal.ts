import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import hre from "hardhat";
import { ethers } from "ethers";
import { keccak256 } from "ethers";
/* Sepolia network is expensive to deploy antiques to so we don't start off with any unlike AntiqueCertificationLocal*/
function generateUniqueId(...args: any[]): string {
  const argsString = args.join(",");
  const hash = keccak256(argsString);
  return `AntiqueCertification.addAntique_${hash.slice(0, 8)}`;
}

const AntiqueCertificationModule = buildModule(
  "AntiqueCertificationModule",

  (m) => {
    async function reset() {
      await hre.network.provider.send("hardhat_reset");
    }
    reset();
    const antiqueCertificationContract = m.contract("AntiqueCertification");
    m.call(
      antiqueCertificationContract,
      "addAntique",
      [
        "Ancient Greek Vase",
        "A beautifully crafted vase from ancient Greece, circa 500 BC.",
        "glassware",
        "1800s",
        ethers.getAddress("0x29f9146174aaed443eec9cc3f43aac190c29f9f4"),
        true,
        "https://www.cmarianiantiques.com/wp-content/uploads/2019/06/Home_Slide_01_antiques.jpg",
      ],
      { id: "a1" }
    );

    m.call(
      antiqueCertificationContract,
      "addAntique",
      [
        "Roman Bronze Statue",
        "An exquisitely crafted bronze statue from ancient Rome, circa 100 AD.",
        "collectibles",
        "pre1700s",
        ethers.getAddress("0x29F9146174aAEd443eEc9cC3F43aAc190C29f9F4"),
        true,
        "https://www.cmarianiantiques.com/wp-content/uploads/2019/06/Home_Slide_01_antiques.jpg",
      ],
      { id: "a2" }
    );

    m.call(
      antiqueCertificationContract,
      "addAntique",
      [
        "Victorian Mahogany Armchair",
        "A luxurious mahogany armchair from the Victorian era, circa 1860.",
        "furniture",
        "1800s",
        ethers.getAddress("0x25465E22b6AF0fA990D75105ABb9DDb1aD8fF75c"),
        false,
        "https://www.cmarianiantiques.com/wp-content/uploads/2019/06/Home_Slide_01_antiques.jpg",
      ],
      { id: "a3" }
    ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Ming Dynasty Vase",
          "A beautifully crafted vase from the Ming Dynasty, circa 1500 AD.",
          "pottery",
          "pre1700s",
          ethers.getAddress("0xb4A4B5F5E1E79A9Df1352D7a06882e5e57D0986e"),
          true,
          "https://example.com/ming_vase.jpg",
        ],
        { id: "a4" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Art Nouveau Glass Lamp",
          "An elegant glass lamp from the Art Nouveau period, circa 1905.",
          "glassware",
          "1900s",
          ethers.getAddress("0x6b2d3f3f7f967404F0fc4d2413152b233Cc74db9"),
          false,
          "https://example.com/art_nouveau_lamp.jpg",
        ],
        { id: "a5" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Georgian Oak Table",
          "A solid oak table from the Georgian period, circa 1750.",
          "furniture",
          "pre1700s",
          ethers.getAddress("0x1D94AdB0a07e34ddf8A1d88cDc52846bCa51Aa00"),
          true,
          "https://example.com/georgian_oak_table.jpg",
        ],
        { id: "a6" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Ancient Greek Pottery",
          "A fine example of ancient Greek pottery, circa 500 BC.",
          "pottery",
          "pre1700s",
          ethers.getAddress("0x9c29b4f38cE0ECaDa0e5f71499f23F7beA139176"),
          false,
          "https://example.com/greek_pottery.jpg",
        ],
        { id: "a7" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Edwardian Silverware Set",
          "A complete silverware set from the Edwardian era, circa 1902.",
          "collectibles",
          "1900s",
          ethers.getAddress("0x98Fc1DD18e0554E76F7aCCC84D3EEc90d5ABEc74"),
          true,
          "https://example.com/edwardian_silverware.jpg",
        ],
        { id: "a8" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Renaissance Oil Painting",
          "A magnificent oil painting from the Renaissance period, circa 1600.",
          "collectibles",
          "pre1700s",
          ethers.getAddress("0x8649074782aE50293020B60c46b0F8DeE42bb857"),
          false,
          "https://example.com/renaissance_painting.jpg",
        ],
        { id: "a9" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "19th Century Porcelain Doll",
          "A delicate porcelain doll from the 19th century, circa 1880.",
          "collectibles",
          "1800s",
          ethers.getAddress("0x32639D3ffD124FcfD2b88CaE416c1268e1A14DD8"),
          true,
          "https://example.com/porcelain_doll.jpg",
        ],
        { id: "a10" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Baroque Gilt Mirror",
          "An ornate gilt mirror from the Baroque period, circa 1700.",
          "furniture",
          "pre1700s",
          ethers.getAddress("0x62a30bA91195294d4C8570252304393123475a97"),
          false,
          "https://example.com/baroque_mirror.jpg",
        ],
        { id: "a11" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Art Deco Cocktail Shaker",
          "A stylish cocktail shaker from the Art Deco period, circa 1930.",
          "glassware",
          "1900s",
          ethers.getAddress("0xDee29BdDE363cEb9Ec0387C194331926b96fFE75"),
          true,
          "https://example.com/art_deco_shaker.jpg",
        ],
        { id: "a12" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Louis XVI Commode",
          "A finely crafted commode from the Louis XVI period, circa 1780.",
          "furniture",
          "pre1700s",
          ethers.getAddress("0x29F9146174aAEd443eEc9cC3F43aAc190C29f9F4"),
          false,
          "https://example.com/louis_xvi_commode.jpg",
        ],
        { id: "a13" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Regency Mahogany Sideboard",
          "A classic mahogany sideboard from the Regency period, circa 1820.",
          "furniture",
          "1800s",
          ethers.getAddress("0x25465E22b6AF0fA990D75105ABb9DDb1aD8fF75c"),
          true,
          "https://example.com/regency_sideboard.jpg",
        ],
        { id: "a14" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Qing Dynasty Porcelain Bowl",
          "An exquisite porcelain bowl from the Qing Dynasty, circa 1700.",
          "pottery",
          "pre1700s",
          ethers.getAddress("0xb4A4B5F5E1E79A9Df1352D7a06882e5e57D0986e"),
          false,
          "https://example.com/qing_bowl.jpg",
        ],
        { id: "a15" }
      );

    m.call(
      antiqueCertificationContract,
      "addAntique",
      [
        "Mid-Century Modern Chair",
        "A stylish chair from the mid-century modern period, circa 1950.",
        "furniture",
        "1900s",
        ethers.getAddress("0x6b2d3f3f7f967404F0fc4d2413152b233Cc74db9"),
        true,
        "https://example.com/mid_century_chair.jpg",
      ],
      { id: "a16" }
    ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Ancient Egyptian Amulet",
          "A rare amulet from ancient Egypt, circa 1000 BC.",
          "collectibles",
          "pre1700s",
          ethers.getAddress("0x1D94AdB0a07e34ddf8A1d88cDc52846bCa51Aa00"),
          false,
          "https://example.com/egyptian_amulet.jpg",
        ],
        { id: "a17" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Art Nouveau Ceramic Vase",
          "A beautifully designed ceramic vase from the Art Nouveau period, circa 1910.",
          "pottery",
          "1900s",
          ethers.getAddress("0x9c29b4f38cE0ECaDa0e5f71499f23F7beA139176"),
          true,
          "https://example.com/nouveau_vase.jpg",
        ],
        { id: "a18" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Victorian Walnut Cabinet",
          "A fine walnut cabinet from the Victorian era, circa 1890.",
          "furniture",
          "1800s",
          ethers.getAddress("0x98Fc1DD18e0554E76F7aCCC84D3EEc90d5ABEc74"),
          false,
          "https://example.com/victorian_cabinet.jpg",
        ],
        { id: "a19" }
      ),
      m.call(
        antiqueCertificationContract,
        "addAntique",
        [
          "Art Deco Bronze Sculpture",
          "An elegant bronze sculpture from the Art Deco period, circa 1920.",
          "collectibles",
          "1900s",
          ethers.getAddress("0x8649074782aE50293020B60c46b0F8DeE42bb857"),
          true,
          "https://example.com/deco_sculpture.jpg",
        ],
        { id: "a20" }
      );

    return { antiqueCertificationContract };
  }
);
module.exports = AntiqueCertificationModule;
