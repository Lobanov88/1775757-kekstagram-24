import { showFullPicture } from './show-full-photo.js';

const findPicture = (element, index, array) => {
  for (let i = 0; i < array.length; i++) {
    if (element[i].dataId)
  }
}

const onMiniatureClick = (evt) => {
  evt.preventDefault();

  showFullPicture( ?);
};

const createMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;

  // const template = pictureTemplate.querySelector('a');

  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    // const photoElement = template.cloneNode(true);
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    const dataId = photo.id;

    photo.addEventListener('click', onMiniatureClick);

    photosFragment.appendChild(photoElement);
  });

  const container = document.querySelector('.pictures');

  container.appendChild(photosFragment);
};

export { createMiniature };
