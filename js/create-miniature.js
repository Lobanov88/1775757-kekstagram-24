import { showFullPicture } from './show-full-photo.js';

const onMiniatureClick = (evt, photos) => {
  evt.preventDefault();
  const clickedPhoto = photos.filter((photo) => photo.id === evt.currentTarget.dataId)[0];

  showFullPicture(clickedPhoto);
};

const createMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture').content;

  const template = pictureTemplate.querySelector('a');

  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = template.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;

    photoElement.dataId = photo.id;

    photosFragment.appendChild(photoElement);

    photoElement.addEventListener('click', (evt) => {
      onMiniatureClick(evt, photos);
    },
    );
  });

  const container = document.querySelector('.pictures');

  container.appendChild(photosFragment);
};

export { createMiniature };
