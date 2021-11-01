import {arrayPhotos} from './make-array-photos.js';
import {createMiniature} from './create-miniature.js';
import {showFullPicture} from './show-full-photo.js';
import './form.js'

createMiniature(arrayPhotos);

showFullPicture(arrayPhotos[2]);
