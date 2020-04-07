const menuToggle = document.querySelector(".site-header__toggle");
const navigationOverlay = document.querySelector(".overlay");
const bodyTag = document.querySelector("body");

function handleNavigationToggl() {
  navigationOverlay.classList.toggle("open");
  menuToggle.classList.toggle("active");
  bodyTag.style.overflow = "hidden";
}

menuToggle.addEventListener("click", handleNavigationToggl);
