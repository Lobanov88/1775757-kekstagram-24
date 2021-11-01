import { createDescription } from './create-description.js';

const arrayPhotos = [];

const PHOTOS_SUM = 25;

const makeArrayPhotos = () => {
  for (let i = 1; i <= PHOTOS_SUM; i++) {
    const newPhoto = createDescription(i);
    arrayPhotos.push(newPhoto);
  }
};

makeArrayPhotos();

export { arrayPhotos };
