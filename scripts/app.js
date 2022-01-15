const hamburger = document.querySelector(".hamburger__button")
const menu = document.querySelector(".menu");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('shown')
    menu.classList.toggle('show');
})



AOS.init({
    offset: 200,
    delay: 0,
    duration: 1000
});