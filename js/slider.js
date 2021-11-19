const sliderElement = document.querySelector('.effect-level__slider');
const valueSlider = document.querySelector('.effect-level__value');

const imgUploadContainer = document.querySelector('.img-upload__preview');
const imgUpload = imgUploadContainer.querySelector('img');

const slider = document.querySelector('.effect-level');

const effectsList = document.querySelector('.effects__list');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
});

const sliderSettings = {
  none:
  {
    class: 'effects__preview--mone',
    min: 0,
    max: 0.1,
    start: 0,
    step: 0,
    effect: 'none',
  },
  chrome:
  {
    class: 'effects__preview--chrome',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    effect: 'grayscale',
  },
  sepia:
  {
    class: 'effects__preview--sepia',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    effect: 'sepia',
  },
  marvin:
  {
    class: 'effects__preview--marvin',
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    effect: 'invert',
  },
  phobos:
  {
    class: 'effects__preview--phobos',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    effect: 'blur',
  },
  heat:
  {
    class: 'effects__preview--heat',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    effect: 'brightness',
  },
};

const specialStyles = {
  marvin: 'marvin',
  phobos: 'phobos',
  none: 'none',
};

const cleanSliderEffects = () => {
  slider.style.display = 'none';
  imgUpload.classList.add(sliderSettings.none.class);
  imgUpload.style.filter = specialStyles.none;
};

cleanSliderEffects();

const onEffectsChange = (evt) => {
  imgUpload.classList.remove(imgUpload.classList[1]);
  const sliderSetting = sliderSettings[evt.target.value.toUpperCase()];
  imgUpload.classList.add(sliderSetting.class);

  if (evt.target.value === specialStyles.none) {

    slider.style.display = 'none';

  } else {

    slider.style.display = 'block';
  }

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: sliderSetting.min,
      max: sliderSetting.max,
    },
    start: sliderSetting.start,
    step: sliderSetting.step,
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  sliderElement.noUiSlider.on('update', (values, handle) => {
    valueSlider.value = values[handle];
    if (evt.target.value === specialStyles.none) {
      imgUpload.style.filter = specialStyles.none;

    } else {
      let units = '';
      switch (evt.target.value) {
        case specialStyles.marvin:
          units = '%';
          break;
        case specialStyles.phobos:
          units = 'px';
          break;
      }
      imgUpload.style.filter = `${sliderSetting.effect}(${valueSlider.value}${units})`;
    }
  });

};

effectsList.addEventListener('change', onEffectsChange);

export { cleanSliderEffects };
