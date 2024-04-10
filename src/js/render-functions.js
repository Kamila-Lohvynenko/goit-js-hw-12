import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function renderImages(images) {
  try {
    if (!images.length) {
      throw Error(`There are no images matching the search query`);
    }
  } catch (error) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    console.log(error);
  }
  const markupImages = images
    .map(image => {
      return `
            <li class="item">
            <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}">
            </a>
            <div class="item-content">
            <div>
            <h3 class="title">Likes</h3>
            <p class="amount">${image.likes}</p>
            </div>
            <div>
            <h3 class="title">Views</h3>
            <p class="amount">${image.views}</p>
            </div>
            <div>
            <h3 class="title">Comments</h3>
            <p class="amount">${image.comments}</p>
            </div>
            <div>
            <h3 class="title">Downloads</h3>
            <p class="amount">${image.downloads}</p>
            </div>
            </div>
            </li>
            `;
    })
    .join('');
  return markupImages;
}

export default renderImages;
