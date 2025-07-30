var doggie = document.getElementById("doggie");
var display = document.getElementById("doggies");
if (!doggie || !display) {
    throw new Error("Required elements doggie or doggies not found in the dom");
}
var count = parseInt(localStorage.getItem("doggieCount") || "0", 10);
var dpc = parseInt(localStorage.getItem("dpc") || "1", 10);
function saveData() {
    localStorage.setItem("doggieCount", count.toString());
    localStorage.setItem("dpc", dpc.toString());
}
function updateDisplay() {
    display.textContent = count.toString();
    saveData();
}
updateDisplay();
doggie.addEventListener("click", function () {
    count += dpc;
    updateDisplay();
});
// upgrades
var upgradesBtn = document.getElementById("u1");
upgradesBtn.addEventListener("click", function () {
    if (count >= 50) {
        count -= 50;
        dpc += 1;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn2 = document.getElementById("u2");
upgradesBtn2.addEventListener("click", function () {
    if (count >= 500) {
        count -= 500;
        dpc += 5;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn3 = document.getElementById("u3");
upgradesBtn3.addEventListener("click", function () {
    if (count >= 1750) {
        count -= 1750;
        dpc += 10;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn4 = document.getElementById("u4");
upgradesBtn3.addEventListener("click", function () {
    if (count >= 4000) {
        count -= 4000;
        dpc += 25;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn5 = document.getElementById("u5");
upgradesBtn3.addEventListener("click", function () {
    if (count >= 10000) {
        count -= 10000;
        dpc += 50;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn6 = document.getElementById("u6");
upgradesBtn6.addEventListener("click", function () {
    if (count >= 30000) {
        count -= 30000;
        dpc += 250;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn7 = document.getElementById("u7");
upgradesBtn7.addEventListener("click", function () {
    if (count >= 75000) {
        count -= 75000;
        dpc += 750;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn8 = document.getElementById("u8");
upgradesBtn8.addEventListener("click", function () {
    if (count >= 225000) {
        count -= 225000;
        dpc += 3000;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn9 = document.getElementById("u9");
upgradesBtn9.addEventListener("click", function () {
    if (count >= 2000000) {
        count -= 2000000;
        dpc += 10000;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
var upgradesBtn10 = document.getElementById("u10");
upgradesBtn10.addEventListener("click", function () {
    if (count >= 5500000) {
        count -= 5500000;
        dpc += 30000;
        localStorage.setItem("dpc", dpc.toString());
        updateDisplay();
    }
});
