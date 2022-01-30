const nav = document.querySelector(".nav");
// const navLinks = document.querySelectorAll(".header__nav-links__li-href");

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
nav.addEventListener("mouseover", handleHover.bind(0.7));

nav.addEventListener("mouseout", handleHover.bind(1));
