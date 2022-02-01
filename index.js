const nav = document.querySelector(".nav");
const tiitle__btn = document.querySelector(".headerTitle__btn");
const section1 = document.querySelector("#section--1");
const header = document.querySelector(".header");
const sections = document.querySelectorAll(".section");
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

//fixed nav bar when scroll in to section issue(low performance )

// window.addEventListener("scroll", function () {
//   const coords = section1.getBoundingClientRect();

//   if (coords.top <= 0) {
//     console.log(coords.top);
//     nav.classList.add("nav--sticky");
//     return;
//   }
//   if (coords.top > 0) {
//     nav.classList.remove("nav--sticky");
//     return;
//   }
// });

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("nav--sticky");
    return;
  }
  nav.classList.remove("nav--sticky");
};

const navCoords = nav.getBoundingClientRect();

//create observer for better performance

//nav observer
const navObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navCoords.height}px`,
});
navObserver.observe(header);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

//section observer
const sectionObs = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach((section) => {
  section.classList.add("section--hidden");
  sectionObs.observe(section);
});

const blurImages = document.querySelectorAll("img[data-src]");

const revelLazy = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove("lazy-img");
  observer.unobserve(entry.target);
};

const imageObs = new IntersectionObserver(revelLazy, {
  root: null,
  threshold: 0,
});

blurImages.forEach((image) => {
  imageObs.observe(image);
});
