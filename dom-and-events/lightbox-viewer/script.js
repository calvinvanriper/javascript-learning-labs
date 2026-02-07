const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.getElementById('close-btn');
const lightboxEl = document.querySelector('.lightbox');
const lightboxImgEl = document.getElementById('lightbox-image');

/**
 * Shows the lightbox and swaps the full-size image source based on the clicked thumbnail.
 * The full-size image URL is derived by removing the "-thumbnail" suffix.
 *
 * @param {HTMLImageElement} thumbnailEl - The thumbnail image element that was clicked.
 * @returns {void}
 */
function openLightbox(thumbnailEl) {
  lightboxImgEl.src = thumbnailEl.src.replace('-thumbnail', '');
  lightboxEl.style.display = 'flex';
}

/**
 * Hides the lightbox overlay.
 *
 * @returns {void}
 */
function closeLightbox() {
  lightboxEl.style.display = 'none';
}

// Close button closes the lightbox
closeBtn.addEventListener('click', closeLightbox);

// Clicking the overlay closes the lightbox
lightboxEl.addEventListener('click', closeLightbox);

// Each thumbnail opens the lightbox with its corresponding full-size image
galleryItems.forEach((img) => {
  img.addEventListener('click', (e) => openLightbox(e.currentTarget));
});
