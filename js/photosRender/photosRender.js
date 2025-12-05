
function renderPhotosTemplate(photosData) {
  const fragment = new DocumentFragment();
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture');

  photosData.forEach((photoData) => {
    const pictureElement = pictureTemplate.content.cloneNode(true);

    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = photoData.url;
    pictureImg.alt = photoData.description;

    pictureElement.querySelector('.picture__likes').textContent = photoData.likes;
    pictureElement.querySelector('.picture__comments').textContent = photoData.comments.length;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}


export {renderPhotosTemplate};
