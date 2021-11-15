import { isEscapeKey } from './util.js';

const body = document.querySelector('body');

const pictures = document.querySelector('.pictures');

const errorContainer = document.querySelector('#error').content;
const errorTemplate = errorContainer.querySelector('section');
const errorMessage = errorTemplate.cloneNode(true);
body.appendChild(errorMessage);
errorMessage.classList.add('hidden');

const closeErrorMessage = () => {
  errorMessage.classList.add('hidden');

  document.removeEventListener('keydown', onErrorMessageEscKeydown);
};

function onErrorMessageEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
}

const showErrorMessage = () => {
  errorMessage.classList.remove('hidden');

  document.addEventListener('keydown', onErrorMessageEscKeydown);
};

let serverErrorMessage;

const createServerErrorMessage = () => {
  serverErrorMessage = document.createElement('div');
  serverErrorMessage.classList.add('error');
  const text = document.createElement('p');
  text.textContent = 'Упс... Ошибка сервера! Попробуйте обновить или зайти попозже';
  serverErrorMessage.appendChild(text);
  pictures.appendChild(serverErrorMessage);

  serverErrorMessage.classList.add('hidden');
};

const showServerErrorMessage = () => {
  serverErrorMessage.classList.remove('hidden');

  document.addEventListener('keydown', onServerErrorMessageEscKeydown);
};

const closeServerErrorMessage = () => {
  serverErrorMessage.classList.add('hidden');

  document.removeEventListener('keydown', onServerErrorMessageEscKeydown);
};

function onServerErrorMessageEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeServerErrorMessage();
  }
}

const successContainer = document.querySelector('#success').content;
const successTemplate = successContainer.querySelector('section');
const successMessage = successTemplate.cloneNode(true);
body.appendChild(successMessage);
successMessage.classList.add('hidden');

const closeSuccessButton = document.querySelector('.success__button');

const closeSuccessMessage = () => {
  successMessage.classList.add('hidden');

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
  successMessage.classList.remove('hidden');

  document.addEventListener('keydown', onFetchMessageEscKeydown);
};

export { createServerErrorMessage, showErrorMessage, showSuccessMessage, showServerErrorMessage };
