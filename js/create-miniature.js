import { createDescription } from "./create-comments";

const pictureTemplate = document.querySelector('#picture')
  .content;
const commentList = document.querySelector('.social__comments');

const pictureElement = pictureTemplate.cloneNode(true);
commentList.appendChild(pictureElement);

const socialComments = createDescription();

const commentsFragment = document.createDocumentFragment();

socialComments.forEach((comment) => {
  const commentElement = pictureTemplate.cloneNode(true);
  commentElement.querySelector('.picture__img').href = comment.avatar;
  commentElement.querySelector('.picture__likes').textContent = photoElement.likes;
  // commentElement.querySelector('.picture__comments').textContent =
  // что-то не понял откуда брать количество комментариев от слова совсем
  commentsFragment.appendChild(commentElement);
});

commentList.appendChild(commentsFragment);

export {createMiniature};
