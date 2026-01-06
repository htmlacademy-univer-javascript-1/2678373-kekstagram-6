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

function genetareUniqueRandomValue(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}
export {getRandomInteger, createIdFromRangeGenerator, genetareUniqueRandomValue};
