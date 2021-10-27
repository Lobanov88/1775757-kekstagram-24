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
const reHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const arrayOfHashtags = textHashtags.value.split(' ');

textHashtags.addEventListener('input', () => {
  if (arrayOfHashtags.length > 5) {
    textHashtags.setCustomValidity('Возможно добавление не более 5 хэш-тегов');
  } else {
    textHashtags.setCustomValidity('');
  }
});

arrayOfHashtags.forEach(hashtag => {
  if (hashtag.length > 20) {
    textHashtags.setCustomValidity('Слишком длинный хэш-тег');
  } else if (hashtag.length < 2) {
    textHashtags.setCustomValidity('Слишком короткий хэш-тег');
  } else if (!hashtag[0] === #) {
    textHashtags.setCustomValidity('Хэш-тег должен начинаться с #');
  } else if (!reHastag.test.hashtag) {
    textHashtags.setCustomValidity('В хэш-тегах возможны только буквы и цифры')
  } else {
    textHashtags.setCustomValidity('');
  }
});

// примерно так???

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
