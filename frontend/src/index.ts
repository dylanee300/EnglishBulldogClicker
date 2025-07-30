const doggieLogo = document.getElementById("doggieLogo") as HTMLImageElement;

doggieLogo.addEventListener("click", () => {
  console.log("test");
});

const loginBtn = document.getElementById("login") as HTMLButtonElement;

loginBtn.addEventListener("click", () => {
  window.location.href = "login.html";
});

const storeBtn = document.getElementById("store") as HTMLButtonElement;

storeBtn.addEventListener("click", () => {
  window.location.href = "404.html";
});

const aboutBtn = document.getElementById("about") as HTMLButtonElement;

aboutBtn.addEventListener("click", () => {
  window.location.href = "404.html";
});

