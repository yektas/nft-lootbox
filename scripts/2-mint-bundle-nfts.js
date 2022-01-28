import { readFileSync } from "fs";
import { sdk, bundleModuleAddress } from "./helpers.js";

async function main() {
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT batch...");

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: "Rottweiler",
        description: "Novel rotweiler",
        image: readFileSync("./assets/dog-1.jpg"),
        properties: {
          rarity: "super rare!",
          fanciness: 10,
        },
      },
      supply: 10,
    },
    {
      metadata: {
        name: "Mouse!",
        description: "Cute little mouse dog",
        image: readFileSync("./assets/dog-2.jpg"),
        properties: {
          rarity: "common dog!",
          fanciness: 10,
        },
      },
      supply: 50,
    },
    {
      metadata: {
        name: "Wolf",
        description: "While wolf",
        image: readFileSync("./assets/dog-3.jpg"),
        properties: {
          rarity: "common dog!",
          fanciness: 15,
        },
      },
      supply: 50,
    },
  ]);

  console.log("NFTs created!");
  console.log(JSON.stringify(created, null, 2));
}

try {
  await main();
} catch (error) {
  console.error("Error minting the NFTs", error);
  process.exit(1);
}
