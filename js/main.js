import { renderPhotosTemplate } from './photosRender/photosRender.js';
import { trackFormUpload } from './form/formModalControl.js';
import { fetchPhotos } from './api/fetchPhotos.js';
import { showToast } from './toasts/fetchErrorToast.js';
import { bindFilterChange } from './photosFilter/applyFilter.js';
fetchPhotos((data) => {
  renderPhotosTemplate(data);
  bindFilterChange(data);
  console.log(data);

}, showToast);

trackFormUpload();
