import { sendData } from './fetch.js';
import { showErrorMessage, showSuccessMessage } from './fetch-messages.js';
import { closeUploadPhoto } from './form.js';

const imgUploadForm = document.querySelector('.img-upload__form');

const onSuccesUpload = () => {
  showSuccessMessage();
  closeUploadPhoto();
};

const cleanImgUploadForm = () => {
  imgUploadForm.reset();
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(onSuccesUpload, showErrorMessage, new FormData(evt.target));
  cleanImgUploadForm();
});
