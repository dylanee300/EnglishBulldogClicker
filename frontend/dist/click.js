var doggie = document.getElementById("doggie");
var display = document.getElementById("doggies");
var count = parseInt(localStorage.getItem("doggieCount") || "0", 10);
var dpc = parseInt(localStorage.getItem("dpc") || "1", 10);
function updateDisplay() {
    display.textContent = count.toString();
    localStorage.setItem("doggieCount", count.toString());
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
