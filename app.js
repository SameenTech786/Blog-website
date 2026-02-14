const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.querySelectorAll(".hero a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
  const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

});
// Small accessibility improvement
document.querySelectorAll(".post-card").forEach(card => {
  card.setAttribute("tabindex", "0");
});
const footerYear = document.querySelector(".footer-bottom p");
const currentYear = new Date().getFullYear();

footerYear.innerHTML = `© ${currentYear} MyBlog. All rights reserved.`;
