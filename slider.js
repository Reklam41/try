const navBar = document.querySelector(".nav-bar");
const offScreenMenu = document.querySelector(".off-screen-menu");

navBar.addEventListener("click", () => {
  navBar.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});
