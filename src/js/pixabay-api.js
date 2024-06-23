const API_KEY = '44423682-ae5a9afd37f02d31d9155c276';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async query => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return await response.json();
};
