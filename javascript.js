{
  const menuToogle = document.querySelector(".menu-toogle input");
  const nav = document.querySelector("nav ul");

  menuToogle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
}

let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
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
{
  mediumZoom(".object", {
    margin: 50,
  });
}
