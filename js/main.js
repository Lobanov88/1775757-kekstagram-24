import { arrayPhotos } from './make-array-photos.js';
import { showFullPicture } from './show-full-photo.js';
import { showErrorMessage, createServerErrorMessage, showServerErrorMessage, showSuccessMessage } from './fetch-messages.js';
import './form.js';
import './edit-scale.js';
import './slider.js';
import { createMiniature } from './create-miniature.js';
import { getData } from './fetch.js';
import './submit-button.js';
import { activateFilters, filterDefault, filterRandom, filterDiscussed } from './filter.js';

// createMiniature(arrayPhotos);

// showFullPicture(arrayPhotos[2]);
createServerErrorMessage();

const onSuccessLoad = (photos) => {
  createMiniature(photos);
  activateFilters();
  filterDiscussed(photos);
  filterDefault(photos);
  filterRandom(photos);
};

getData(onSuccessLoad, showServerErrorMessage);
