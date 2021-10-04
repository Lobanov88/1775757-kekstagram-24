const getRandomNumber = (min, max) => {
  // https://learn.javascript.ru/task/random-int-min-max
  if (max < min) {
    console.log('Неправильно задан интервал. Первое число должно быть меньше.');
    return;
  }
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

getRandomNumber(5, 75);

const checkLength = (checkString, maxLength) => checkString.length < maxLength;

const exampleText = 'слишком длинный текст';

checkLength(exampleText, 6);

const PHOTOS_SUM = 25;

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

let arrayPhotos = [];

const makeArrayPhotos = () => {
  for (let i = 1; i <= PHOTOS_SUM; i++) {
    let newPhoto = createDescription(i);
    arrayPhotos.push(newPhoto);
  }
};

makeArrayPhotos();

console.log(arrayPhotos);
