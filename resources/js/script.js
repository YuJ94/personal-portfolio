// HEADER VARIABLES
const header = document.querySelector("header");

// HEADER FUNCTIONS
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});