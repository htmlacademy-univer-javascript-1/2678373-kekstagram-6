import {RANDOM_PHOTOS_AMOUNT} from '../constants/constants.js';
import { genetareUniqueRandomValue } from '../utils/randomNums.js';
function shufflePhotos(photosData) {
  const shuffeledPhotos = [];
  const randomIndex = genetareUniqueRandomValue(0, photosData.length - 1);
  for (let i = 0; i < photosData.length; i++) {
    const index = randomIndex();
    shuffeledPhotos.push(photosData[index]);
  }
  console.log(shuffeledPhotos);
  return shuffeledPhotos.slice(0, RANDOM_PHOTOS_AMOUNT);
}

export { shufflePhotos };
