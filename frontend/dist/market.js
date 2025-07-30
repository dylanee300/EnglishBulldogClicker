"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var weekOneMarket = [
    { name: 'Doggie', img: 'https://i.postimg.cc/ZqkTpshJ/English-Bull-Dog.png', price: 25000000000 }, // 25b
    { name: 'Doggie2', img: 'https://i.postimg.cc/Mprx0ynK/alttdoggie.png', price: 40000000000 }, // 40b
    { name: 'Doggie3', img: 'https://i.postimg.cc/rw5Cx9n5/alttdoggie.png', price: 750000000000 }, // 75b
];
// popups 
var popup = document.getElementById("popup");
var popupText = popup.querySelector("p");
var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");
(_a = document.getElementById("c1")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    popup.style.display = "block";
});
noButton.addEventListener("click", function () {
    popup.style.display = "none";
});
