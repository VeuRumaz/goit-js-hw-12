import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = images
    .map(
      image => `
    <a href="${image.largeImageURL}" class="gallery__link">
      <img src="${image.webformatURL}" alt="${image.tags}" class="gallery__image"/>
      <div class="info">
        <div class="info-item">
          <b>Likes</b>
          <span>${image.likes}</span>
        </div>
        <div class="info-item">
          <b>Views</b>
          <span>${image.views}</span>
        </div>
        <div class="info-item">
          <b>Comments</b>
          <span>${image.comments}</span>
        </div>
        <div class="info-item">
          <b>Downloads</b>
          <span>${image.downloads}</span>
        </div>
      </div>
    </a>`
    )
    .join('');

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    captionClass: 'sl-caption pos-bottom',
  });
  lightbox.refresh();
}
