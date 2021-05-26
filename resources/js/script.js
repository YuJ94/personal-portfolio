// NAVIGATION VARIABLES
const navigation = document.querySelector(".navigation");

// NAVIGATION FUNCTIONS
window.addEventListener("scroll", function() {
    navigation.classList.toggle("sticky", window.scrollY > 0);
});

// LIGHT DARK VARIABLES
let body = document.body;
let toggleBtn = document.querySelector('.toggle-btn');
let currentTheme = localStorage.getItem('currentTheme');

// LIGHT DARK FUNCTIONS
if (currentTheme) {
    body.classList.add('light-theme');
}

toggleBtn.addEventListener('click', function() {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        localStorage.setItem('currentTheme', 'themeActive');
    } else {
        localStorage.removeItem('currentTheme');
    }
});