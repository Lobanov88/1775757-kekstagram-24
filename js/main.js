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

const descriptionArray = [
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

const messageArray = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const commentNamesArray = [
  'Петька',
  'Василий Иваныч',
  'Тема',
  'Мария',
  'Иван',
  'Микола',
  'Антуан',
];

const createComments = () => {
  let comment = {};
  comment.id = getRandomNumber(150, 999);
  comment.avatar = 'img/avatar-' + getRandomNumber(1, 6) + '.svg';
  comment.message = messageArray[getRandomNumber(1, messageArray.length)];
  comment.name = commentNamesArray[getRandomNumber(1, commentNamesArray.length)];
};

const createDescription = (number) => {
  let arrayPhotosElement = {};
  arrayPhotosElement.id = number;
  arrayPhotosElement.url = 'photos/' + number + '.jpg';
  arrayPhotosElement.description = descriptionArray[getRandomNumber(0, descriptionArray.length - 1)];
  arrayPhotosElement.likes = getRandomNumber(15, 200);
  arrayPhotosElement.comments = [];
  arrayPhotosElement.comments.push(createComments());
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
