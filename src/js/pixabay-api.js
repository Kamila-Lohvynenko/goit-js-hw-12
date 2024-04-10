import axios from 'axios';

const myApiKey = '43199917-ac2cc136e7963c28457226ad3';
axios.defaults.baseURL = 'https://pixabay.com/api/';

async function fetchImages(valueForSearch, page) {
  const params = {
    key: myApiKey,
    q: valueForSearch.trim(),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page.currentPage,
  };

  const response = await axios.get(``, { params });

  page.currentPage += 1;
  return response.data;
}

export default fetchImages;
