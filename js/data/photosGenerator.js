import {getRandomInteger} from '../utils/randomNums.js';
function generatePhotosDescription(amount, generator) {
  const Names = [
    'Андрей',
    'Катя',
    'Виктор',
    'Даня'
  ];
  const Comments = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];

  const commentId = generator;

  function generateCommentsDescription(commentsCount) {
    const commentsDescriptionObjects = [];
    for (let i = 0; i < commentsCount; i++) {
      const commentCount = getRandomInteger(1, 2);
      let message = '';
      for (let j = 0; j < commentCount; j++) {
        message += Comments[getRandomInteger(0, Comments.length - 1)];
        if (j === 0 && commentCount === 2) {
          message += ' ';
        }
      }
      const commentDescription = {
        id : commentId(),
        avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
        message: message,
        name: Names[getRandomInteger(0, Names.length - 1)],
      };
      commentsDescriptionObjects.push(commentDescription);
    }
    return commentsDescriptionObjects;
  }

  const photosDescriptionObjects = [];

  for (let i = 1; i < amount + 1; i++ ) {
    const commentsAmount = getRandomInteger(0, 30);
    const photoDesctiption = {
      id : i,
      url: `photos/${i}.jpg`,
      description: `Работаю в Контуре: день ${i}`,
      likes: getRandomInteger(15, 200),
      comments: generateCommentsDescription(commentsAmount),
    };
    photosDescriptionObjects.push(photoDesctiption);
  }

  return photosDescriptionObjects;
}


export {generatePhotosDescription};
