import {createDescription} from './create-description.js';

let arrayPhotos = [];

const PHOTOS_SUM = 25;

const makeArrayPhotos = () => {
  for (let i = 1; i <= PHOTOS_SUM; i++) {
    let newPhoto = createDescription(i);
    arrayPhotos.push(newPhoto);
  }
};

makeArrayPhotos();

export {arrayPhotos};
