import {generatePhotosDescription} from './data/photosGenerator.js';
import {createIdFromRangeGenerator} from './utils/randomNums.js';
import { PHOTOS_COUNT, COMMENT_ID_MAX } from './constants/constants.js';

const commentsIdGenerator = createIdFromRangeGenerator(COMMENT_ID_MAX);
const photos = generatePhotosDescription(PHOTOS_COUNT, commentsIdGenerator);
