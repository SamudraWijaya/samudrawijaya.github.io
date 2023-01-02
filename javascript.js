// navbar
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
window.onscroll = () => {
  navbar.classList.remove("active");
};
//  sticky
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 90) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const portofolioContainers = [
  ...document.querySelectorAll(".portofolio-container"),
];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

portofolioContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// skill slider
{
  const portofolioContainers = [
    ...document.querySelectorAll(".skill-container"),
  ];
  const nxtBtn = [...document.querySelectorAll(".nxt-btn2")];
  const preBtn = [...document.querySelectorAll(".pre-btn2")];

  portofolioContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
  });
}

{
  const backToTopButton = document.querySelector("#back-to-top-btn");

  window.addEventListener("scroll", scrollFunction);

  function scrollFunction() {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  }
  backToTopButton.addEventListener("click", backToTop);

  function backToTop() {
    window.scrollTo(0, 0);
  }
}
