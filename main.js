// flippable card on About Me section
let box = document.querySelector(".statCard");
box.addEventListener("click", function () {
  box.classList.toggle("active");
});

// function keyFunction(e) {
//   if (e.keyCode == 38) {
//     box.classList.add("active");
//   }
//   if (e.keyCode == 40) {
//     box.classList.remove("active");
//   }
// }
