// NAVIGATION VARIABLES
const navigation = document.querySelector(".navigation");

// NAVIGATION FUNCTIONS
window.addEventListener("scroll", function() {
    navigation.classList.toggle("sticky", window.scrollY > 0);
});