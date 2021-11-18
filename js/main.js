import { createServerErrorMessage, showServerErrorMessage } from './fetch-messages.js';
import './form.js';
import './edit-scale.js';
import './slider.js';
import { createMiniature } from './create-miniature.js';
import { getData } from './fetch.js';
import './submit-button.js';
import { activateFilters, applyFilterDefault, applyFilterRandom, applyFilterDiscussed } from './filter.js';

createServerErrorMessage();

const onSuccessLoad = (photos) => {
  createMiniature(photos);
  activateFilters();
  applyFilterDiscussed(photos);
  applyFilterDefault(photos);
  applyFilterRandom(photos);
};

getData(onSuccessLoad, showServerErrorMessage);
