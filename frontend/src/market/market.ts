import type { MarketItem } from './market';
import { count } from "./click"; 

const weekOneMarket: MarketItem[] = [
    { name: 'Doggie', img: 'https://i.postimg.cc/ZqkTpshJ/English-Bull-Dog.png', price: 25000000000 }, // 25b
    { name: 'Doggie2', img: 'https://i.postimg.cc/Mprx0ynK/alttdoggie.png', price: 40000000000 }, // 40b
    { name: 'Doggie3', img: 'https://i.postimg.cc/rw5Cx9n5/alttdoggie.png', price: 750000000000 }, // 75b
];


// popups 

const popup = document.getElementById("popup") as HTMLDivElement;
const popupText = popup.querySelector("p") as HTMLParagraphElement;
const yesButton = document.getElementById("yes") as HTMLButtonElement;
const noButton = document.getElementById("no") as HTMLButtonElement;


document.getElementById("c1")?.addEventListener("click", () => {
    popup.style.display = "block"
});

noButton.addEventListener("click", () => {
    popup.style.display = "none";
});

yesButton.addEventListener("click", () => { 
    popup.style.display = "none;" 
});

const marketCountDisplay = document.getElementById("marketCount") as HTMLDivElement;

marketCountDisplay.textContent = count.toString();

