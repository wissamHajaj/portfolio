const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');


menuBtn.addEventListener('click', function() {
    console.log('clicked');
    navLinks.classList.toggle("active");
});