// script.js

document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");
  
    menu.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  
    // Smooth scroll for internal links
    document.querySelectorAll('.navbar a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    window.onscroll = () => {
      navbar.classList.remove("active");
    };
  });
  