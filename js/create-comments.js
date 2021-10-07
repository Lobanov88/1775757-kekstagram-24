import {getRandomNumber} from './get-random-number.js';

const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const COMMENT_NAMES_ARRAY = [
  'Петька',
  'Василий Иваныч',
  'Тема',
  'Мария',
  'Иван',
  'Микола',
  'Антуан',
];

const createComments = (number) => {
  let comment = {};
  comment.id = number;
  comment.avatar = 'img/avatar-' + getRandomNumber(1, 6) + '.svg';
  comment.message = MESSAGE_ARRAY[getRandomNumber(1, MESSAGE_ARRAY.length)];
  comment.name = COMMENT_NAMES_ARRAY[getRandomNumber(1, COMMENT_NAMES_ARRAY.length)];
  return comment;
};

export {createComments};
