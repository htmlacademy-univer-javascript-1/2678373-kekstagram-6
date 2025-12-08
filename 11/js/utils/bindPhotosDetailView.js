import { showDetailView } from '../photosRender/photoDetailView.js';

function bindPhotoDetailView(picturesContainer, photosData) {
  const photosMap = new Map(photosData.map((photoData) => [photoData.id, photoData]));

  picturesContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');

    const id = Number(picture.dataset.id);
    const photoData = photosMap.get(id);

    showDetailView(photoData);
  });
}

export { bindPhotoDetailView };
