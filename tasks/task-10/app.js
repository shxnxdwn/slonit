'use strict';


const calcNumericValues = (object) => {
  let result = 0;

  for (let key in object) {
    if (typeof object[key] === 'number') {
      result += object[key];
    }
  }

  return result;
};


const sortNumericKeysByDescending = (object) => {
  const result = [];

  for (let key in object) {
    if (typeof object[key] === 'number') {
      result.push(key);
    }
  }

  result.sort((a, b) => object[b] - object[a]);

  return result;
};
