const createMiniature = (photos) => {
  const pictureTemplate = document.querySelector('#picture')
    .content;

  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = photo.url;
    photoElement.querySelector('.picture__likes').textContent = photo.likes;
    photoElement.querySelector('.picture__comments').textContent = photo.comments.length;
    photosFragment.appendChild(photoElement);
  });

  const container = document.querySelector('.pictures');

  container.appendChild(photosFragment);
};

export {createMiniature};
