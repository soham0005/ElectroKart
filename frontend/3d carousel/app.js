const imageContainer = document.querySelector('.image-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Get all the slides (image spans)
const slides = document.querySelectorAll('.image-container span');
let currentSlide = 0; // Start from the first slide
const totalSlides = slides.length; // Total number of slides

// Update the rotation of the carousel
function updateCarousel() {
  // Calculate the angle for the current slide (360 / totalSlides) times the slide number
  const angle = (360 / totalSlides) * currentSlide;
  imageContainer.style.transform = `perspective(1000px) rotateY(-${angle}deg)`;
}

// Add event listeners for the buttons
prevBtn.addEventListener('click', () => {
  // Move to the previous slide
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Loop around if out of bounds
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  // Move to the next slide
  currentSlide = (currentSlide + 1) % totalSlides; // Loop around if out of bounds
  updateCarousel();
});

// Optional: Pause the automatic rotation when interacting
imageContainer.addEventListener('mouseover', () => {
  imageContainer.style.animationPlayState = 'paused'; // Stop rotation on hover
});

imageContainer.addEventListener('mouseout', () => {
  imageContainer.style.animationPlayState = 'running'; // Resume rotation when not hovered
});