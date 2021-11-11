import { isEscapeKey } from './util.js';

const body = document.querySelector('body');

const errorContainer = document.querySelector('#error').content;
const errorTemplate = errorContainer.querySelector('section');
const errorMessage = errorTemplate.cloneNode(true);

const closeErrorMessage = () => {
  errorTemplate.classList.add('hidden');

  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

function onErrorMessageEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
}

const showErrorMessage = () => {
  body.appendChild(errorMessage);

  document.addEventListener('keydown', onFetchMessageEscKeydown);
};

const successContainer = document.querySelector('#success').content;
const successTemplate = successContainer.querySelector('section');
const successMessage = successTemplate.cloneNode(true);
const closeSuccessButton = successContainer.querySelector('.success__button');

const closeSuccessMessage = () => {
  successTemplate.classList.add('hidden');

  document.removeEventListener('keydown', onFetchMessageEscKeydown);
};

closeSuccessButton.addEventListener('click', closeSuccessMessage);

function onFetchMessageEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
}

const showSuccessMessage = () => {
  body.appendChild(successMessage);

  document.addEventListener('keydown', onFetchMessageEscKeydown);
};

export { showErrorMessage, showSuccessMessage };
