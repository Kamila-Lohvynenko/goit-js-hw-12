import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import fetchImages from './js/pixabay-api';
import renderImages from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = form.elements.input;
const imagesList = document.querySelector('.container');
const loadingMessage = document.querySelector('.loader');
const loadMoreButton = document.querySelector(`.next-page-btn`);
const endMessage = document.querySelector(`.end`);

form.addEventListener('submit', searchImages);
loadMoreButton.addEventListener(`click`, loadMore);

let valueForSearch = ``;

const page = { currentPage: 1 };
let totalPages = 0;

function searchImages(event) {
  event.preventDefault();
  endMessage.classList.add(`is-hidden`);

  valueForSearch = searchInput.value;
  page.currentPage = 1;
  imagesList.innerHTML = '';

  if (!searchInput.value.trim()) {
    makeErrorMessage('Your query does not contain any letters!');
    return;
  }
  loadingMessage.classList.remove('is-hidden');

  fetchImages(valueForSearch, page)
    .then(response => {
      loadingMessage.classList.add(`is-hidden`);
      totalPages = Math.ceil(response.totalHits / 15);
      if (page.currentPage <= totalPages) {
        loadMoreButton.classList.remove(`is-hidden`);
      }
      if (!response.hits) {
        makeErrorMessage('There is a problem with on the server');
        throw new Error(`Object "hits" is missing`);
      }
      imagesList.insertAdjacentHTML(`beforeend`, renderImages(response.hits));
      lightbox.refresh();
    })
    .catch(error => {
      loadingMessage.classList.add(`is-hidden`);
      console.log(error);
    })
    .finally(() => form.reset());
}

function loadMore() {
  loadMoreButton.classList.remove(`is-hidden`);
  fetchImages(valueForSearch, page)
    .then(response => {
      loadingMessage.classList.add(`is-hidden`);
      totalPages = Math.ceil(response.totalHits / 15);
      if (page.currentPage > totalPages) {
        loadMoreButton.classList.add(`is-hidden`);
        endMessage.classList.remove(`is-hidden`);
      }
      if (!response.hits) {
        makeErrorMessage('There is a problem with data on the server');
        throw new Error(`Object "hits" is missing`);
      }
      imagesList.insertAdjacentHTML(`beforeend`, renderImages(response.hits));
      lightbox.refresh();
      makeScroll();
    })
    .catch(error => {
      loadingMessage.classList.add(`is-hidden`);
      console.log(error);
    });
}
const lightbox = new SimpleLightbox('.container a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function makeScroll() {
  const card = imagesList.firstElementChild;
  const height = card.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}

function makeErrorMessage(message) {
  iziToast.error({
    message,
    position: 'topRight',
  });
}
