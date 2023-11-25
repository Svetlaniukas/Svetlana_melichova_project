document.getElementById('displayYear').textContent = new Date().getFullYear();

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

// Initialize the slider
showSlide(currentSlide);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('displayYear').textContent = new Date().getFullYear();
    
    const totalSlides = slides.length;
    document.querySelector('.slider-btn.left').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    document.querySelector('.slider-btn.right').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Slide every 5 seconds
});
