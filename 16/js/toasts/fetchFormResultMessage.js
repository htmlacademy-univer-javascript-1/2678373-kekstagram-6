import { onFormEscapeKeydown } from '../utils/keyboardControl.js';
function showMessage(success) {
  const successClass = success ? 'success' : 'error';
  const template = document.querySelector(`#${successClass}`);
  if (!success) {
    document.removeEventListener('keydown', onFormEscapeKeydown);
  }
  const statusElement = template.content.querySelector(`.${successClass}`).cloneNode(true);
  statusElement.style.zIndex = 1000;
  document.body.appendChild(statusElement);

  const inner = statusElement.querySelector(`.${successClass}__inner`);
  const button = statusElement.querySelector(`.${successClass}__button`);

  function closeError() {
    statusElement.remove();
    document.removeEventListener('keydown', onEscKeydown);
    document.removeEventListener('click', onOutsideClick);
    if (!success) {
      document.addEventListener('keydown', onFormEscapeKeydown);
    }
  }

  function onEscKeydown(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeError();
    }
  }

  function onOutsideClick(evt) {
    if (!inner.contains(evt.target)) {
      closeError();
    }
  }

  button.addEventListener('click', closeError);
  document.addEventListener('keydown', onEscKeydown);
  document.addEventListener('click', onOutsideClick);
}

export { showMessage };
