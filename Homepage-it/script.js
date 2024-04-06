const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    moveSlides();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    moveSlides();
  }
}

function moveSlides() {
  const offset = currentIndex * -100;
  gsap.to(".slide", {
    x: `${offset}vw`,
    duration: 0.5,
    ease: "power2.out"
  });
}