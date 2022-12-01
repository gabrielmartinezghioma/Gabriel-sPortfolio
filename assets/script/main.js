 const navButton = document.querySelector(".nav__button");
 const navUl = document.querySelector(".nav__ul");

 navButton.addEventListener("click", ()=>{
    navUl.classList.toggle("nav__button--togle")
 });