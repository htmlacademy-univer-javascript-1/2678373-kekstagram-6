import { FORM_IMAGE_SCALE_DEFAULT, FORM_IMAGE_SCALE_MIN, FORM_IMAGE_SCALE_MAX, FORM_IMAGE_SCALE_STEP } from '../constants/constants.js';

function resetScaleFilter() {
  const scaleControlValue = document.querySelector('.scale__control--value');
  const imagePreview = document.querySelector('.img-upload__preview img');

  scaleControlValue.value = `${FORM_IMAGE_SCALE_DEFAULT}%`;
  imagePreview.style.transform = 'scale(1)';
}
function trackFormImageScaleEdit() {
  const scaleControlSmaller = document.querySelector('.scale__control--smaller');
  const scaleControlBigger = document.querySelector('.scale__control--bigger');

  resetScaleFilter();

  scaleControlSmaller.addEventListener('click', decreaseScale);

  scaleControlBigger.addEventListener('click', increaseScale);
}
function updateImageScale(newValue) {
  const imagePreview = document.querySelector('.img-upload__preview img');
  const scaleControlValue = document.querySelector('.scale__control--value');
  imagePreview.style.transform = `scale(${newValue / 100})`;
  scaleControlValue.value = `${newValue}%`;
}

function increaseScale() {
  const value = parseInt(document.querySelector('.scale__control--value').value, 10);
  const newValue = Math.min(value + FORM_IMAGE_SCALE_STEP, FORM_IMAGE_SCALE_MAX);
  updateImageScale(newValue);
}
function decreaseScale() {
  const value = parseInt(document.querySelector('.scale__control--value').value, 10);
  const newValue = Math.max(value - FORM_IMAGE_SCALE_STEP, FORM_IMAGE_SCALE_MIN);
  updateImageScale(newValue);
}


export { trackFormImageScaleEdit };
