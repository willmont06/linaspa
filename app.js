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
document.getElementById('schedulingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simple form validation
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  
  if (name && email && date && time) {
    // Hide the form with a fade out effect
    const form = this;
    form.style.transition = 'opacity 0.5s ease';
    form.style.opacity = '0';
    
    // Show success message
    setTimeout(() => {
      form.style.display = 'none';
      document.querySelector('.success-message').style.display = 'block';
    }, 500);
  }
});

// Set minimum date to today
const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.min = today;
