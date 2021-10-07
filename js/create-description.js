import {getRandomNumber} from './get-random-number.js';
import {createComments} from './create-comments.js';

const DESCRIPTION_ARRAY = [
  'мое любимое фото',
  'просто фото',
  'мое первое фото на новом телефоне ура у меня новый телефон',
  'только поглядите красота такая',
  'толко праснулис и вот на тибе',
  'не сфотографировал - значит, не было',
  'LOVE',
  'б - бесит',
  '...',
  'без описания',
  'увау!!!!!!!!!!!',
  'да что вы вообще понимаете в фотографиях',
  'Тема бы как всегда засрал, но мне пох',
];

const createDescription = (number) => {
  let photoElement = {};
  photoElement.id = number;
  photoElement.url = 'photos/' + number + '.jpg';
  photoElement.description = DESCRIPTION_ARRAY[getRandomNumber(0, DESCRIPTION_ARRAY.length - 1)];
  photoElement.likes = getRandomNumber(15, 200);
  photoElement.comments = [];
  photoElement.comments.push(createComments(number));
  return photoElement;
};

export {createDescription};
