import { setupUpgrades } from "./upgrades";

const doggie = document.getElementById("doggie") as HTMLImageElement | null;
const display = document.getElementById("doggies") as HTMLSpanElement | null;

if (!doggie || !display) {
  throw new Error("Required elements doggie or doggies not found in the dom");
}

export let count: number = parseInt(localStorage.getItem("doggieCount") || "0", 10);
let dpc: number = parseInt(localStorage.getItem("dpc") || "1", 10);

const countRef = { value: count };
const dpcRef = { value: dpc };

function saveData(): void {
  localStorage.setItem("doggieCount", countRef.value.toString());
  localStorage.setItem("dpc", dpcRef.value.toString());
}

function updateDisplay(): void {
  count = countRef.value;
  dpc = dpcRef.value;
  display.textContent = count.toString();
  saveData();
}

updateDisplay();

doggie.addEventListener("click", () => {
  countRef.value += dpcRef.value;
  updateDisplay();
});

setupUpgrades(countRef, dpcRef, updateDisplay, saveData);