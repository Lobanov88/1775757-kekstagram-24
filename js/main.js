import { arrayPhotos } from './make-array-photos.js';
import { showFullPicture } from './show-full-photo.js';
import { showErrorMessage, showSuccessMessage } from './fetch-messages.js';
import './form.js';
import './edit-scale.js';
import './slider.js';
import { createMiniature } from './create-miniature.js';
import { getData } from './fetch.js';
import './submit-button.js';

// createMiniature(arrayPhotos);

// showFullPicture(arrayPhotos[2]);

getData(createMiniature, showErrorMessage);
