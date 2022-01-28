import { ThirdwebSDK } from "@3rdweb/sdk";
import ethers from "ethers";

// Read environment variables from .env
import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error("Wallet private key missing");
  process.exit(1);
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // Wallet private key. NEVER CHECK THE KEY IN. ALWAYS USE ENVIRONMENT VARIABLES.
    process.env.WALLET_PRIVATE_KEY,
    // We use Polygon Mumbai network
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
  )
);

const appAddress = "0x8C7C7a731E06e123DA0622e8aCb1d4e214e2d924"; // your project address from thirdweb
export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}

export const bundleModuleAddress = "0x37D6E2A8a8F857626B2D2A9b10045F3feED51c7F";
export const packModuleAddress = "0x2d3224Ed005caff018AF8720beF477cCC68baF8E";
