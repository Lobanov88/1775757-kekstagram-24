import { isEscapeKey } from './util.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const onUploadPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPhoto();
  }
};

function closeUploadPhoto () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';

  document.removeEventListener('keydown', onUploadPhotoEscKeydown);
}

const openEditPhoto = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
};

uploadFile.addEventListener('change', openEditPhoto ());
uploadCancel.addEventListener('click', closeUploadPhoto ());

const textHashtags = document.querySelector('.text__hashtags');
const reHashtag = /^[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

textHashtags.addEventListener('input', () => {
  if (!reHashtag.test(textHashtags.value)) {
    textHashtags.setCustomValidity('Неправильный формат хэш-тега');
  } else {
    textHashtags.setCustomValidity('');
  }
});

const stopPropagation = (evt) => {
  evt.stopImmediatePropagation();
};

textHashtags.addEventListener('focus', stopPropagation(evt));
// оно?

const textDescription = document.querySelector('.text__description');
const MAX_DESCRIPTION_LENGTH = 140;

textDescription.addEventListener('input', () => {
  if (textDescription.value.length > MAX_DESCRIPTION_LENGTH) {
    textDescription.setCustomValidity('Превышено максимальное количество символов комментария');
  } else {
    textDescription.setCustomValidity('');
  }
});
