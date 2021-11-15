import { arrayPhotos } from './make-array-photos.js';
import { showFullPicture } from './show-full-photo.js';
import { showErrorMessage, showSuccessMessage } from './fetch-messages.js';
import './form.js';
import './edit-scale.js';
import './slider.js';
import { createMiniature } from './create-miniature.js';
import { getData } from './fetch.js';
import './submit-button.js';
import { activateFilters, filterDefault, filterRandom, filterDiscussed } from './filter.js';

// createMiniature(arrayPhotos);

// showFullPicture(arrayPhotos[2]);

const onSuccessLoad = (photos) => {
  createMiniature(photos);
  activateFilters();
  filterDiscussed(photos);
  filterDefault(photos);
  filterRandom(photos);
};

getData(onSuccessLoad, showErrorMessage);
