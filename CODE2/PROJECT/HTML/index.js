// JavaScript can be used to add interactivity, like smooth scrolling, form validation, etc.
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
