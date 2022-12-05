const navButtonMenu = document.querySelector(".nav__button");
const navDiv = document.querySelector(".nav__div");

navButtonMenu.addEventListener("click", () => {
   navDiv.classList.toggle("nav__button--togle")
});

const navButtonCross = document.querySelector(".nav__button--cross");

navButtonCross.addEventListener("click", () => {
   navDiv.classList.toggle("nav__button--togle")
});

document
   .querySelector(".nav__div")
   .addEventListener("click", (event) => {
      if (event.target.classList.contains("nav__ul--a")) {
         navDiv.classList.toggle("nav__button--togle")
      } else if (event.target.classList.contains("nav__ul--aHome")) {
         navDiv.classList.toggle("nav__button--togle")
      }
   })

