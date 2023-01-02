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
