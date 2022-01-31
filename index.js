const nav = document.querySelector(".nav");
const tiitle__btn = document.querySelector(".headerTitle__btn");
const section1 = document.querySelector("#section--1");

//resuable function
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const navLinks = e.target.closest(".nav");

    const sibilings = navLinks.querySelectorAll(".nav__link");

    sibilings.forEach((navLink) => {
      if (e.target !== navLink) navLink.style.opacity = this;
    });
    document.querySelector(".nav__logo").style.opacity = this;
    e.target.style.opacity = 1;
  }
};

//add mouseOver and mouseout listeners
nav.addEventListener("mouseover", handleHover.bind(0.6));

nav.addEventListener("mouseout", handleHover.bind(1));

tiitle__btn.addEventListener("click", function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
