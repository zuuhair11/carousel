const slides = document.getElementsByClassName('carousel-item');
const prevButton = document.getElementById('carousel-button-prev');
const nextButton = document.getElementById('carousel-button-next');
const slideNumber = document.querySelector('.slide-number');

let slidePosition = 0;
const totalSlides = slides.length;


// Listen for a click
nextButton.addEventListener('click', moveToNextSlide);
prevButton.addEventListener('click', moveToPrevSlide);


function hideAllSlides() {
    for(const slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    hideAllSlides();

    if(slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slideNumber.textContent = slidePosition + 1;
    slides[slidePosition].classList.add("carousel-item-visible");
}

function moveToPrevSlide() {
    hideAllSlides();
    if(slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition --;
    }
    slideNumber.textContent = slidePosition + 1;
    slides[slidePosition].classList.add('carousel-item-visible');
}

// Let the slide moving automatically
setInterval(function() {
    moveToNextSlide()
}, 2000);