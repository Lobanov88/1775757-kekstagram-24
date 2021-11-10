const body = document.querySelector('body');

const errorContainer = document.querySelector('#error').content;
const errorTemplate = errorContainer.querySelector('section');
const errorMessage = errorTemplate.cloneNode(true);
const showErrorMessage = () => {
  body.appendChild(errorMessage);
};

const successContainer = document.querySelector('#success').content;
const successTemplate = successContainer.querySelector('section');
const successMessage = successTemplate.cloneNode(true);
const showSuccessMessage = () => {
  body.appendChild(successMessage);
};

export { showErrorMessage, showSuccessMessage };
