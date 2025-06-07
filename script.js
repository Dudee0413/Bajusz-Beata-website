const track = document.querySelector('.gallery-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateGallery() {
  const slideWidth = track.clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextButton.addEventListener('click', () => {
  const totalSlides = track.children.length;
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateGallery();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

window.addEventListener('resize', updateGallery);
