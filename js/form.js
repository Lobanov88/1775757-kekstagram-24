import { isEscapeKey } from './util.js';
import { cleanSliderEffects } from './slider.js';
import { cleanScaleForm } from './edit-scale.js';

const MAX_SUM_HASHTAGS = 5;
const MAX_LENGTH_HASHTAG = 20;
const MIN_LENGTH_HASHTAG = 2;
const MAX_LENGTH_DESCRIPTION = 140;

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const closeUploadPhoto = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadFile.value = '';

  cleanSliderEffects();
  cleanScaleForm();

  document.removeEventListener('keydown', onUploadPhotoEscKeydown);
};

function onUploadPhotoEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPhoto();
  }
}

const openEditPhoto = () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onUploadPhotoEscKeydown);
};

uploadFile.addEventListener('change', openEditPhoto);
uploadCancel.addEventListener('click', closeUploadPhoto);

const textHashtags = document.querySelector('.text__hashtags');
const reHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const textDescription = document.querySelector('.text__description');

const checkUniquenessOfHashtags = (stringOfHashtags) => {
  const lowCaseString = stringOfHashtags.map((hashtag) => hashtag.toLowerCase());
  for (let i = 0; i < stringOfHashtags.length; i++) {
    for (let j = i + 1; j < stringOfHashtags.length; j++) {
      if (lowCaseString[i] === lowCaseString[j]) {
        return true;
      }
    }
  }
  return false;
};

textHashtags.addEventListener('input', () => {
  const arrayOfHashtags = textHashtags.value.split(' ');

  if (arrayOfHashtags.length > MAX_SUM_HASHTAGS) {
    textHashtags.setCustomValidity('Возможно добавление не более 5 хэш-тегов');
  } else if (arrayOfHashtags.some((hashtag) => hashtag.length > MAX_LENGTH_HASHTAG)) {
    textHashtags.setCustomValidity('Слишком длинный хэш-тег');
  } else if (arrayOfHashtags.some((hashtag) => hashtag.length < MIN_LENGTH_HASHTAG)) {
    textHashtags.setCustomValidity('Слишком короткий хэш-тег');
  } else if (arrayOfHashtags.some((hashtag) => hashtag[0] !== '#')) {
    textHashtags.setCustomValidity('Хэш-тег должен начинаться с #');
  } else if (arrayOfHashtags.some((hashtag) => !reHashtag.test(hashtag))) {
    textHashtags.setCustomValidity('В хэш-тегах возможны только буквы и цифры');
  } else if (checkUniquenessOfHashtags(arrayOfHashtags)) {
    textHashtags.setCustomValidity('Хэш-теги не должны повторяться');
  } else {
    textHashtags.setCustomValidity('');
  }
  textHashtags.reportValidity();
});

textDescription.addEventListener('input', () => {
  if (textDescription.value.length > MAX_LENGTH_DESCRIPTION) {
    textDescription.setCustomValidity('Комментарий не может быть длинее 140 символов');
  } else {
    textDescription.setCustomValidity('');
  }
  textDescription.reportValidity();
});

const stopPropagation = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

textHashtags.addEventListener('keydown', stopPropagation);

textDescription.addEventListener('keydown', stopPropagation);

export { closeUploadPhoto };
