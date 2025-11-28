import {generatePhotosDescription} from './data/photosGenerator.js';
import {getRandomInteger, createRandomIdFromRangeGenerator} from './utils/randomNums.js';


const commentsIdGenerator = createRandomIdFromRangeGenerator(1, 1000);
const photos = generatePhotosDescription(25, commentsIdGenerator);
console.log(photos);


