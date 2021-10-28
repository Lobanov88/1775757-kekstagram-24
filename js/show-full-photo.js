import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');

const closeModal = () => {
  bigPicture.classList.add('hidden');
};

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comment-loader');

socialCommentCount.classLlist.remove('hidden');
commentsLoader.classList.remove('hidden');

const COMMENTS_DOSE = 5;
let indexComments = 0;

const showComments = () => {
	for (let i = indexComments; i <= indexComments + COMMENTS_DOSE; i++ ) {
		const socialComment = document.createElement('li');
    socialComment.classList.add('social__comment');
    const socialCommentImg = document.createElement('img');
    socialCommentImg.classList.add('social__picture');
    socialCommentImg.src = photo.comments[i].avatar;
    socialCommentImg.alt = photo.comments[i].name;
    socialCommentImg.width = 35;
    socialCommentImg.height = 35;
    socialComment.appendChild(socialCommentImg);
    const socialText = document.createElement('p');
    socialText.classList.add('social__text');
    socialText.textContent = photo.comments[i].message;
    socialComment.appendChild(socialText);
    socialCommentsList.appendChild(socialComment);
    indexComments++;
};


const showFullPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  const bigPictureUrl = bigPicture.querySelector('.big-picture__img img');
  bigPictureUrl.src = photo.url;
  const bigPictureLikes = bigPicture.querySelector('.likes-count');
  bigPictureLikes.textContent = photo.likes;
  const bigPictureComments = bigPicture.querySelector('.comments-count').textContent;
  const bigPictureDescription = bigPicture.querySelector('.social__caption');
  bigPictureDescription.textContent = photo.description;
  const socialCommentsList = bigPicture.querySelector('.social__comments');
  socialCommentsList.innerHTML = '';

  showComments();
  // for (let i = 0; i < photo.comments.length; i++) {
  //   const socialComment = document.createElement('li');
  //   socialComment.classList.add('social__comment');
  //   const socialCommentImg = document.createElement('img');
  //   socialCommentImg.classList.add('social__picture');
  //   socialCommentImg.src = photo.comments[i].avatar;
  //   socialCommentImg.alt = photo.comments[i].name;
  //   socialCommentImg.width = 35;
  //   socialCommentImg.height = 35;
  //   socialComment.appendChild(socialCommentImg);
  //   const socialText = document.createElement('p');
  //   socialText.classList.add('social__text');
  //   socialText.textContent = photo.comments[i].message;
  //   socialComment.appendChild(socialText);
  //   socialCommentsList.appendChild(socialComment);
  // }

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

commentsLoader.addListener('click', showComments());

export {showFullPicture};
