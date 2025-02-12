'use strict';

const myFilter = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }

  return result;
};


const myFilterWithoutPush = (array, callback) => {
  const result = [];
  let resultIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result[resultIndex] = array[i];
      resultIndex++;
    }
  }

  return result;
};
