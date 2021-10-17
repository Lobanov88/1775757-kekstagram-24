import { isEscapeKey } from "./util.js";

const bigPicture = document.querySelector('.big-picture');

const closeModal = () => {
  bigPicture.classList.add('hidden');
};

const showFullPicture = () => {
  bigPicture.classList.remove('hidden');
  const bigPictureUrl = bigPicture.querySelector('.big-picture__img img').src;
  const bigPictureLikes = bigPicture.querySelector('likes-count').textContent;
  const bigPictureComments = bigPicture.querySelector('comments-count').textContent;
  const bigPictureDescription = bigPicture.querySelector('social__caption');
  const socialCommentsList = bigPicture.querySelector('.social__comments');

  for (let i = 0; i < bigPictureComments.length; i++) {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialCommentImg = socialComment.createElement('img');
    socialCommentImg.classList.add('social__picture');
    // socialCommentImg.src =
    // socialCommentImg.alt =
    socialCommentImg.width = 35;
    socialCommentImg.height = 35;
    const socialText = socialComment.createElement('p');
    socialText.classList.add('social__text');
    // socialText.textContent =
    socialCommentsList.appendChild(socialComment);
  }

  const body = document.querySelector('body');
  body.classList.add('modal-open');
  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');
  const commentsLoader = document.querySelector('.comments-loader');
  commentsLoader.classList.add('hidden');

  const closeModalElement = document.querySelector('#picture-cancel');

  closeModalElement.addEventListener ('click', () => {
    closeModal();
  });

  document.addEventListener ('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModal();
    }
  });
};

export {showFullPicture};
