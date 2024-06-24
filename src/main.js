import { fetchImages, getNextPage } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import imageError from './img/error.svg';

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

let currentQuery = '';

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

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = event.target.elements.searchQuery.value.trim();
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }

  currentQuery = query;
  gallery.innerHTML = '';
  loader.classList.remove('hidden');
  loadMoreBtn.classList.add('hidden');

  try {
    const { hits, totalHits } = await fetchImages(query);
    if (hits.length === 0) {
      iziToast.warning({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderGallery(hits);
      if (hits.length < totalHits) {
        loadMoreBtn.classList.remove('hidden');
      }
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    console.error('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden');
  }
});

loadMoreBtn.addEventListener('click', async () => {
  loadMoreBtn.classList.add('hidden');
  loader.classList.remove('hidden');
  try {
    const nextPage = getNextPage();
    const { hits, totalHits } = await fetchImages(currentQuery, nextPage);
    renderGallery(hits);
    if (gallery.children.length < totalHits) {
      loadMoreBtn.classList.remove('hidden');
    } else {
      iziToast.info({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
    smoothScroll();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
    console.error('Error fetching images:', error);
  } finally {
    loader.classList.add('hidden');
  }
});

function smoothScroll() {
  const { height: cardHeight } =
    gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
