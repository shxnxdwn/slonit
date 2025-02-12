'use strict';

const capitalizeFirstLetter = (string) => string.at(0).toUpperCase() + string.slice(1);


const truncateString = (string, maxLength) => {
  if (string.length <= maxLength) {
    return string;
  }

  const separators = [' ', ',', '.', '!', '?', ':', ';'];
  const effectiveMaxLength = maxLength - 3;
  let lastSeparatorIndex = -1;

  for (let i = effectiveMaxLength; i >= 0; i--) {
    if (separators.includes(string[i])) {
      lastSeparatorIndex = i;
      break;
    }
  }

  if (lastSeparatorIndex === -1) {
    return string.slice(0, effectiveMaxLength) + '...';
  }

  return string.slice(0, lastSeparatorIndex) + '...';
};


const isSubstring = (stringA, stringB) => stringA.includes(stringB) || stringB.includes(stringA);
