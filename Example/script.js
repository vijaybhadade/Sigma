document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.querySelector(".nav-link");

  menuIcon.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});
