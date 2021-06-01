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

// TYPEWRITER VARIABLES
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".text-cursor");

const textArray = ["Committed", "Passionate", "Motivated", "Creative"];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 3000;
let textArrayIndex = 0;
let charIndex = 0;

// TYPEWRITER FUNCTIONS
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 2000);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 500);
});