document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".collapse.navbar-collapse");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    toggleButton.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
  
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 60, // Adjust the offset if you have a fixed header
            behavior: "smooth",
          });
          navbarCollapse.classList.remove("show");
        }
      });
    });
  });
  