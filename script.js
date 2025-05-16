// Array of images with captions
const images = [
  {src: "./img/img1.jpg", alt: "Puppy 1"},
  {src: "./img/img2.jpg", alt: "Puppy 2"},
  {src: "./img/img3.jpg", alt: "Puppy 3"},
  {src: "./img/img4.jpg", alt: "Puppy 4"},
  {src: "./img/img5.jpg", alt: "Puppy 5"},
];

const mainImg = document.getElementById('mainImg');
const caption = document.getElementById('caption');
const counter = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const thumbnailsContainer = document.getElementById('thumbnails');

let currentIndex = 0;

// Create thumbnails dynamically
function createThumbnails() {
  images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.alt = img.alt;
    thumb.classList.toggle('selected', index === currentIndex);
    thumb.addEventListener('click', () => {
      changeImage(index);
    });
    thumbnailsContainer.appendChild(thumb);
  });
}

// Update gallery to show image at index
function changeImage(index) {
  if (index < 0 || index >= images.length) return;

  mainImg.style.opacity = 0;

  setTimeout(() => {
    currentIndex = index;
    mainImg.src = images[index].src;
    mainImg.alt = images[index].alt;
    caption.textContent = images[index].alt;
    counter.textContent = `Image ${index + 1} of ${images.length}`;

    // Update thumbnails highlight
    [...thumbnailsContainer.children].forEach((thumb, i) => {
      thumb.classList.toggle('selected', i === index);
    });

    // Enable/disable buttons
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === images.length - 1;

    mainImg.style.opacity = 1;
  }, 250);
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    changeImage(currentIndex - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    changeImage(currentIndex + 1);
  }
});

// Initialize gallery
createThumbnails();
changeImage(currentIndex);
