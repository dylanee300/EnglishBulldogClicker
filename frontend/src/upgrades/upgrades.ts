export function setupUpgrades(
  countRef: { value: number },
  dpcRef: { value: number },
  updateDisplay: () => void,
  saveData: () => void,
) {



// upgrades

/* const upgrades = [
    {id: 'u1', cost: 50, dpc: 1},
    {id: 'u2', cost: 500, dpc: 5},
    {id: 'u3', cost: 1750, dpc: 10},
    {id: 'u4', cost: 4000, dpc: 25},
    {id: 'u5', cost: 10000, dpc: 50},
    {id: 'u6', cost: 30000, dpc: 250},
    {id: 'u7', cost: 75000, dpc: 750},
    {id: 'u8', cost: 225000, dpc: 3000},
    {id: 'u9', cost: 2000000, dpc: 10000},
    {id: 'u10', cost: 50, dpc: 1}
] */


  const upgradesBtn = document.getElementById("u1") as HTMLImageElement;
  upgradesBtn.addEventListener("click", () => {
    if (countRef.value >= 50) {
      countRef.value -= 50;
      dpcRef.value += 1;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn2 = document.getElementById("u2") as HTMLImageElement;
  upgradesBtn2.addEventListener("click", () => {
    if (countRef.value >= 500) {
      countRef.value -= 500;
      dpcRef.value += 5;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn3 = document.getElementById("u3") as HTMLImageElement;
  upgradesBtn3.addEventListener("click", () => {
    if (countRef.value >= 1750) {
      countRef.value -= 1750;
      dpcRef.value += 10;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn4 = document.getElementById("u4") as HTMLImageElement;
  upgradesBtn4.addEventListener("click", () => {
    if (countRef.value >= 4000) {
      countRef.value -= 4000;
      dpcRef.value += 25;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn5 = document.getElementById("u5") as HTMLImageElement;
  upgradesBtn5.addEventListener("click", () => {
    if (countRef.value >= 10000) {
      countRef.value -= 10000;
      dpcRef.value += 50;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn6 = document.getElementById("u6") as HTMLImageElement;
  upgradesBtn6.addEventListener("click", () => {
    if (countRef.value >= 30000) {
      countRef.value -= 30000;
      dpcRef.value += 250;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn7 = document.getElementById("u7") as HTMLImageElement;
  upgradesBtn7.addEventListener("click", () => {
    if (countRef.value >= 75000) {
      countRef.value -= 75000;
      dpcRef.value += 750;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn8 = document.getElementById("u8") as HTMLImageElement;
  upgradesBtn8.addEventListener("click", () => {
    if (countRef.value >= 225000) {
      countRef.value -= 225000;
      dpcRef.value += 3000;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn9 = document.getElementById("u9") as HTMLImageElement;
  upgradesBtn9.addEventListener("click", () => {
    if (countRef.value >= 2000000) {
      countRef.value -= 2000000;
      dpcRef.value += 10000;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });

  const upgradesBtn10 = document.getElementById("u10") as HTMLImageElement;
  upgradesBtn10.addEventListener("click", () => {
    if (countRef.value >= 5500000) {
      countRef.value -= 5500000;
      dpcRef.value += 30000;
      localStorage.setItem("dpc", dpcRef.value.toString());
      saveData();
      updateDisplay();
    }
  });
}
