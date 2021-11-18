import { debounce } from './utils/debounce.js';
import { getRandomNumber } from './get-random-number.js';
import { createMiniature } from './create-miniature.js';

const NUMBER_RANDOM = 10;
const DELAY = 500;

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');

  pictures.forEach((picture) => {
    picture.remove();
  });
};

const removeActiveClass = () => {
  const buttons = document.querySelectorAll('.img-filters__button');
  buttons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const activateFilters = () => {
  const filtersContainer = document.querySelector('.img-filters');
  filtersContainer.classList.remove('img-filters--inactive');
};

const applyFilterDefault = (photos) => {
  const button = document.querySelector('#filter-default');
  const onDefaultClick = () => {
    removeActiveClass();
    button.classList.add('img-filters__button--active');

    clearPictures();

    createMiniature(photos);
  };
  button.addEventListener('click', debounce(onDefaultClick, DELAY));
};

const applyFilterRandom = (photos) => {
  const button = document.querySelector('#filter-random');

  const onRandomClick = () => {
    const randomPhotos = [];

    while (randomPhotos.length < NUMBER_RANDOM) {
      const photoRandom = photos[getRandomNumber(0, photos.length)];

      if (randomPhotos.filter((photo) => photo.id === photoRandom.id).length === 0) {
        randomPhotos.push(photoRandom);
      }
    }
    removeActiveClass();
    button.classList.add('img-filters__button--active');

    clearPictures();

    createMiniature(randomPhotos);
  };

  button.addEventListener('click', debounce(onRandomClick, DELAY));
};

const applyFilterDiscussed = (photos) => {
  const button = document.querySelector('#filter-discussed');

  const onDiscussedClick = () => {
    const discussedPhotos = photos.slice().sort((a, b) => b.comments.length - a.comments.length);
    removeActiveClass();
    button.classList.add('img-filters__button--active');

    clearPictures();

    createMiniature(discussedPhotos);
  };

  button.addEventListener('click', debounce(onDiscussedClick, DELAY));
};

export { activateFilters, applyFilterDiscussed, applyFilterRandom, applyFilterDefault };
