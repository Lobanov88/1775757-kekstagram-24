import { sendData } from './fetch.js';
import { showErrorMessage, showSuccessMessage } from './fetch-messages';

const imgUploadForm = document.querySelector('.img-upload__form');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(showSuccessMessage, showErrorMessage, evt.target);
});
