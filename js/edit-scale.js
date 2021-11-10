const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const STEP_SCALE = 25;

const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');

const imgUploadContainer = document.querySelector('.img-upload__preview');
const imgUpload = imgUploadContainer.querySelector('img');

const effectLevelValue = document.querySelector('.effect-level__value');

scaleValue.value = DEFAULT_SCALE;

let scaleTrueValue = scaleValue.value;

imgUpload.style.transform = `scale(${scaleTrueValue / 100})`;

scaleBiggerButton.addEventListener('click', () => {
  if (scaleTrueValue !== MAX_SCALE) {
    scaleTrueValue += STEP_SCALE;
    scaleValue.value = scaleTrueValue;

    imgUpload.style.transform = `scale(${scaleTrueValue / 100})`;
    effectLevelValue.value = scaleTrueValue;
  }
});

scaleSmallerButton.addEventListener('click', () => {
  if (scaleTrueValue !== MIN_SCALE) {
    scaleTrueValue -= STEP_SCALE;
    scaleValue.value = scaleTrueValue;

    imgUpload.style.transform = `scale(${scaleTrueValue / 100})`;
    effectLevelValue.value = scaleTrueValue;
  }
});
