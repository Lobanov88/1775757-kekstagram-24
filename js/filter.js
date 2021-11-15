import { debounce } from './utils/debounce.js';
import { getRandomNumber } from './get-random-number.js';
import { createMiniature } from './create-miniature.js';

const NUMBER_RANDOM = 10;

const DELAY = 500;

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

const filterDefault = (photos) => {
  const button = document.querySelector('#filter-default');
  const onDefaultClick = () => {
    removeActiveClass();
    button.classList.add('img-filters__button--active');
    createMiniature(photos);
  };
  button.addEventListener('click', debounce(onDefaultClick, DELAY));
};

const filterRandom = (photos) => {
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
    createMiniature(randomPhotos);
  };

  button.addEventListener('click', debounce(onRandomClick, DELAY));
};

const filterDiscussed = (photos) => {
  const button = document.querySelector('#filter-discussed');

  const onDiscussedClick = () => {
    const discussedPhotos = photos.slice().sort((a, b) => a.comments - b.comments);
    removeActiveClass();
    button.classList.add('img-filters__button--active');
    createMiniature(discussedPhotos);
  };

  button.addEventListener('click', debounce(onDiscussedClick, DELAY));
};

export { activateFilters, filterDiscussed, filterRandom, filterDefault };