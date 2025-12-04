import {generatePhotosDescription} from './data/photosGenerator.js';
import { PHOTOS_COUNT } from './constants/constants.js';
import { renderPhotosTemplate } from './photosRender/photosRender.js';
const photos = generatePhotosDescription(PHOTOS_COUNT);
renderPhotosTemplate(photos);
