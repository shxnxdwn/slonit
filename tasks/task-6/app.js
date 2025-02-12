'use strict';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;


const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


const startGame = (min, max) => {
  let count = 1;
  let left = min;
  let right = max;
  let current;

  const number = getRandomInteger(min, max);
  console.log(`Компьютер 1 загадал число ${number}.`);

  while (true) {
    current = Math.floor((left + right) / 2);
    console.log(` `);
    console.log(`Шаг № ${count++}`);
    console.log(`Компьютер 2: Пробую число ${current}.`);

    if (current === number) {
      console.log(`Угадал!`);
      break;
    }

    if (number > current) {
      console.log(`Компьютер 1: Больше.`);
      left = current + 1;
    } else {
      console.log(`Компьютер 1: Меньше.`);
      right = current -1;
    }
  }
};

startGame(MIN_NUMBER, MAX_NUMBER);
