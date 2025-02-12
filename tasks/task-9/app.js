'use strict';


const mySlice = (array, start = 0, end = array.length) => {
  const result = [];

  if (start < 0) {
    start = array.length + start;
  }

  if (end < 0) {
    end = array.length + end;
  }

  for (let i = start; i < end; i++) {
    result.push(array[i]);
  }

  return result;
};


const myIndexOf = (array, item, from = 0) => {
  let result = -1;
  let start = from >= 0 ? from : Math.max(0, array.length + from);

  for (let i = start; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }

  return result;
};


const myIncludes = (array, item, from) => {
  const sameValueZero = (x, y) => x === y || (Number.isNaN(x) && Number.isNaN(y));

  let start = from >= 0 ? from : Math.max(0, array.length + from);

  if (start >= array.length) {
    return false;
  }

  for (let i = start; i < array.length; i++) {
    if (sameValueZero(item, array[i])) {
      return true;
    }
  }

  return false;
};
