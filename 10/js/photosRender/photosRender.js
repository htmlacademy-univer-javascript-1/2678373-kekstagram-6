
function renderPhotosTemplate(data) {
  const photosData = data;
  const fragment = new DocumentFragment();
  const picturesContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture');

  photosData.forEach((element) => {
    const pictureElement = pictureTemplate.content.cloneNode(true);

    const pictureImg = pictureElement.querySelector('.picture__img');
    pictureImg.src = element.url;
    pictureImg.alt = element.description;

    pictureElement.querySelector('.picture__likes').textContent = element.likes;
    pictureElement.querySelector('.picture__comments').textContent = element.comments.length;

    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
}


export {renderPhotosTemplate};
