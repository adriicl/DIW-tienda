let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex); 
});
