let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showPreviousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}


function startSlider() {
    setInterval(showNextSlide, 5000); 
}