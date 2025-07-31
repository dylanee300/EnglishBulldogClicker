import { setupUpgrades } from "./upgrades";

const doggie = document.getElementById("doggie") as HTMLImageElement | null;
const display = document.getElementById("doggies") as HTMLSpanElement | null;

if (!doggie || !display) {
  throw new Error("Required elements doggie or doggies not found in the dom");
}

let count: number = parseInt(localStorage.getItem("doggieCount") || "0", 10);
let dpc: number = parseInt(localStorage.getItem("dpc") || "1", 10);

function saveData(): void {
  localStorage.setItem("doggieCount", count.toString());
  localStorage.setItem("dpc", dpc.toString());
}

function updateDisplay(): void {
  count = countRef.value;
  dpc = dpcRef.value;
  display.textContent = count.toString();
  saveData();
}

updateDisplay();

doggie.addEventListener("click", () => {
  count += dpc;
  updateDisplay();
});

const countRef = { value: count };
const dpcRef = { value: dpc };

setupUpgrades(countRef, dpcRef, updateDisplay, saveData);
