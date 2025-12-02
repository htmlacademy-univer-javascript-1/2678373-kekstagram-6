function getRandomInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createIdFromRangeGenerator(max) {
  let currentValue = 1;
  return function () {
    if (currentValue > max) {
      throw new Error('No more unique IDs available in the specified range');
    }
    return currentValue++;
  };
}

export {getRandomInteger, createIdFromRangeGenerator};
