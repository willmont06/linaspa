console.log ("hello hey there");
// JavaScript for Image Slider
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

// Function to show the slide at the current index
function showSlide() {
  const slideWidth = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Event Listeners for buttons
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length; // Loop back to the first slide
  showSlide();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length; // Loop back to the last slide
  showSlide();
});

// Handle resizing to make the slider responsive
window.addEventListener('resize', showSlide);


//handle hamburger menu

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});
