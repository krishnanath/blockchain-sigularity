import { blockchainsingularity } from "../../declarations/blockchainsingularity";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with blockchainsingularity actor, calling the greet method
  const greeting = await blockchainsingularity.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
