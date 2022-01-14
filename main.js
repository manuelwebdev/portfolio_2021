// flippable card on About Me section
let profile = document.querySelector(".statCard.profile");
let dev = document.querySelector(".statCard.dev");
let design = document.querySelector(".statCard.design");

let cards = [profile, dev, design];
cards.forEach((element) => {
  element.addEventListener("click", () => element.classList.toggle("active"));
});
