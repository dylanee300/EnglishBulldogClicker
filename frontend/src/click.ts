const doggie = document.getElementById("doggie") as HTMLImageElement;
const display = document.getElementById("doggies") as HTMLSpanElement;

let count: number = parseInt(localStorage.getItem("doggieCount") || "0", 10);
let dpc:number = parseInt(localStorage.getItem("dpc") || "1", 10);

function updateDisplay(): void {
  display.textContent = count.toString();
  localStorage.setItem("doggieCount", count.toString());
}

updateDisplay();

doggie.addEventListener("click", () => {
  count += dpc;
  updateDisplay();
});


// upgrades


const upgradesBtn = document.getElementById("u1") as HTMLButtonElement;
upgradesBtn.addEventListener("click", () => {
  if (count >= 50) {
    count -= 50;
    dpc += 1; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

const upgradesBtn2 = document.getElementById("u2") as HTMLButtonElement;
upgradesBtn2.addEventListener("click", () => {
  if (count >= 500) {
    count -= 500;
    dpc += 5; 
    localStorage.setItem("dpc", dpc.toString()); 
    updateDisplay();
  }
});

