const navigation = document.querySelector(".nav");
const header = document.querySelector(".header");


// event listener for scrolling
document.querySelector('.nav__button--toggle').addEventListener('click', classToggle);

// Toggle Function
function classToggle() {
    navigation.classList.toggle('toggle-show')
}

// When the user scrolls the page, execute myFunction 
window.addEventListener("scroll", scrollFunction);

// Add class fixed function for the navbar
function scrollFunction() {
    if (window.screen.width > 900) {
        if (window.scrollY > (header.getBoundingClientRect().height - 1)) {
            navigation.classList.add("fixed");
        }
        else {
            navigation.classList.remove("fixed");
        }
    }
    if (window.scrollY > (header.getBoundingClientRect().height - 1)) {
        navigation.classList.remove('toggle-show');
    }
}