
const images = [
  'images/img1.webp',
  'images/img2.webp',
  'images/img3.webp',
  'images/img4.jpg',
  'images/img5.jpg',
  'images/img6.jpg',
  'images/img7.jpg',
  'images/img8.jpg',
  // add more filenames as needed
];

let currentIndex = 0;

function openOverlay(index) {
  currentIndex = index;
  document.getElementById('overlayImg').src = images[currentIndex];
  document.getElementById('overlay').style.display = 'flex';
}

function closeOverlay() {
  document.getElementById('overlay').style.display = 'none';
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + images.length) % images.length;
  document.getElementById('overlayImg').src = images[currentIndex];
}

// Attach click listeners to thumbnails
document.querySelectorAll('img.thumb').forEach(img => {
  img.addEventListener('click', () => openOverlay(parseInt(img.dataset.index)));
});

// Close overlay when clicking outside image
document.getElementById('overlay').addEventListener('click', e => {
  if (e.target.id === 'overlay') closeOverlay();
});