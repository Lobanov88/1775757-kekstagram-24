import { isEscapeKey } from './util.js';

const COMMENTS_DOSE = 5;

const bigPicture = document.querySelector('.big-picture');

const closeModal = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onFullPhotoEscKeydown);
};

function onFullPhotoEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

socialCommentCount.classList.remove('hidden');
commentsLoader.classList.remove('hidden');

let renderedComments = COMMENTS_DOSE;
let comments = [];

const showComments = () => {

  if (renderedComments >= comments.length) {
    commentsLoader.classList.add('hidden');
    renderedComments = comments.length;
  }

  const bigPictureComments = bigPicture.querySelector('.social__comment-count');

  bigPictureComments.textContent = `${renderedComments} из `;
  const commentsCount = document.createElement('span');
  commentsCount.classList.add('comments-count');
  commentsCount.textContent = comments.length;
  bigPictureComments.appendChild(commentsCount);
  const commentsText = document.createDocumentFragment();
  commentsText.textContent = ' комментариев';
  bigPictureComments.appendChild(commentsText);

  const socialCommentsList = bigPicture.querySelector('.social__comments');
  socialCommentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < renderedComments; i++) {
    const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialCommentImg = document.createElement('img');
    socialCommentImg.classList.add('social__picture');
    socialCommentImg.src = comments[i].avatar;
    socialCommentImg.alt = comments[i].name;
    socialCommentImg.width = 35;
    socialCommentImg.height = 35;
    socialComment.appendChild(socialCommentImg);
    const socialText = document.createElement('p');
    socialText.classList.add('social__text');
    socialText.textContent = comments[i].message;
    socialComment.appendChild(socialText);

    fragment.appendChild(socialComment);
  }

  socialCommentsList.appendChild(fragment);

  renderedComments += COMMENTS_DOSE;

  if (renderedComments > comments.length) {
    renderedComments = comments.length;
  }
};

const showFullPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  const bigPictureUrl = bigPicture.querySelector('.big-picture__img img');
  bigPictureUrl.src = photo.url;
  const bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = photo.likes;
  const bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureDescription.textContent = photo.description;
  const socialCommentsList = bigPicture.querySelector('.social__comments');
  socialCommentsList.innerHTML = '';
  comments = photo.comments;

  renderedComments = COMMENTS_DOSE;
  commentsLoader.classList.remove('hidden');
  showComments();

  const body = document.querySelector('body');
  body.classList.add('modal-open');

  const closeModalElement = document.querySelector('#picture-cancel');

  closeModalElement.addEventListener('click', () => {
    closeModal();
  });

  document.addEventListener('keydown', onFullPhotoEscKeydown);
};

commentsLoader.addEventListener('click', showComments);

export { showFullPicture };
