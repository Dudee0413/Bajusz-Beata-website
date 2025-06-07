// HAMBURGER MENÜ MŰKÖDÉS
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

// GALÉRIA LAPOZÁS
const track = document.querySelector('.gallery-track');
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');

let currentIndex = 0;
const images = document.querySelectorAll('.gallery-track img');
const totalImages = images.length;

function updateGallery() {
  const width = track.clientWidth;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
    updateGallery();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
  }
});

// Automatikus frissítés ablakátméretezéskor
window.addEventListener('resize', updateGallery);

// Első betöltéskor is állítsa be
window.addEventListener('load', updateGallery);
