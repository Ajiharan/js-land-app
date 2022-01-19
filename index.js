const nav = document.querySelector(".header__nav");
// const navLinks = document.querySelectorAll(".header__nav-links__li-href");

const handleHover = function (e) {
  if (e.target.classList.contains("header__nav-links__li-href")) {
    const navLinks = e.target.closest(".header__nav");
    const sibilings = navLinks.querySelectorAll(".header__nav-links__li-href");
    sibilings.forEach((navLink) => {
      if (e.target !== navLink) navLink.style.opacity = this;
    });
    document.querySelector(".header__nav-wrapper__logo").style.opacity = this;
    e.target.style.opacity = 1;
  }
};

nav.addEventListener("mouseover", handleHover.bind(0.7));

nav.addEventListener("mouseout", handleHover.bind(1));
