document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuOpen = document.querySelector(".menu-open");
  const menuClose = document.querySelector(".menu-close");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
      menuOpen.style.display = "none";
      menuClose.style.display = "block";
    } else {
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
    }
  });
});
