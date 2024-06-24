import axios from 'axios';

const API_KEY = '44423682-ae5a9afd37f02d31d9155c276';
const BASE_URL = 'https://pixabay.com/api/';

let currentPage = 1;
let currentQuery = '';

export const fetchImages = async (query, page = 1) => {
  if (query !== currentQuery) {
    currentQuery = query;
    currentPage = 1;
  } else {
    currentPage = page;
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: 15,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from Pixabay:', error);
    throw error;
  }
};

export const getNextPage = () => currentPage + 1;
