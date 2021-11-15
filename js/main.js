import { createServerErrorMessage, showServerErrorMessage } from './fetch-messages.js';
import './form.js';
import './edit-scale.js';
import './slider.js';
import { createMiniature } from './create-miniature.js';
import { getData } from './fetch.js';
import './submit-button.js';
import { activateFilters, filterDefault, filterRandom, filterDiscussed } from './filter.js';

createServerErrorMessage();

const onSuccessLoad = (photos) => {
  createMiniature(photos);
  activateFilters();
  filterDiscussed(photos);
  filterDefault(photos);
  filterRandom(photos);
};

getData(onSuccessLoad, showServerErrorMessage);
