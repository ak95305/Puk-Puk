// Mobile Nav
let hamIcon = document.querySelector('.nav_mob_icon');
let mobNav = document.querySelector('.mob_nav_menu');
let closeNav = document.querySelector('.close_mob_nav');
let navOverlay = document.querySelector('.nav-overlay');
hamIcon.addEventListener('click', () => {
    navOverlay.classList.add('active');
    setTimeout(function () {
        mobNav.classList.add('active');
    }, 300);
});
closeNav.addEventListener('click', () => {
    navOverlay.classList.remove('active')
    mobNav.classList.add('slide_nav');
    setTimeout(function () {
        mobNav.classList.remove('active');
        mobNav.classList.remove('slide_nav');
    }, 500);

});