

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 400) {
        $("nav").addClass("active");
        $(".logo").addClass("active");
      } else {
        $("nav").removeClass("active");
        $(".logo").removeClass("active");
    }
    });
  });

// NAVBAR TOGGLER
const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const showMenu = document.querySelector(".links");
const sections = document.querySelector("section");
const overlay = document.querySelector(".overley");

openMenu.addEventListener("click", () => {
    showMenu.classList.toggle("active");
    sections.classList.toggle("active");
    overlay.classList.toggle("active");
  })
  
  closeMenu.addEventListener("click", () => {
    showMenu.classList.toggle("active");
    sections.classList.toggle("active");
    overlay.classList.toggle("active");
})
