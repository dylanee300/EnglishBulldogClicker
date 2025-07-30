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
  display.textContent = count.toString();
  saveData();
}

updateDisplay();

doggie.addEventListener("click", () => {
  count += dpc;
  updateDisplay();
});


// upgrades


const upgradesBtn = document.getElementById("u1") as HTMLImageElement;
upgradesBtn.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    dpc += 1; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

const upgradesBtn2 = document.getElementById("u2") as HTMLImageElement;
upgradesBtn2.addEventListener("click", () => {
  if (count >= 500) {
    count -= 500;
    dpc += 5; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

const upgradesBtn3 = document.getElementById("u3") as HTMLImageElement;
upgradesBtn3.addEventListener("click", () => {
  if (count >= 1750) {
    count -= 1750;
    dpc += 10; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

const upgradesBtn4 = document.getElementById("u4") as HTMLImageElement;
upgradesBtn3.addEventListener("click", () => {
  if (count >= 4000) {
    count -= 4000;
    dpc += 25; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

const upgradesBtn5 = document.getElementById("u5") as HTMLImageElement;
upgradesBtn3.addEventListener("click", () => {
  if (count >= 10000) {
    count -= 10000;
    dpc += 50; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

const upgradesBtn6 = document.getElementById("u6") as HTMLImageElement;
upgradesBtn6.addEventListener("click", () => {
  if (count >= 30000) {
    count -= 30000;
    dpc += 250; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});
