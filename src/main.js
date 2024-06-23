import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageError from './img/error.svg';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

iziToast.settings({
  position: 'topRight',
  resetOnHover: true,
  transitionIn: 'fadeInDown',
  transitionOut: 'fadeOutUp',
  progressBar: true,
  closeOnEscape: true,
  theme: 'dark',
  messageColor: 'white',
  iconUrl: imageError,
  backgroundColor: 'red',
  titleColor: '#fff',
  titleSize: '16px',
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }
  gallery.innerHTML = '';
  loader.classList.remove('hidden');

  fetchImages(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.warning({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderGallery(hits);
      }
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
      });
      console.error('Error fetching images:', error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });
});
