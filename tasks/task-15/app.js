'use strict';

const createLogger = () => {
  const logs = [];

  return {
    log: (message) => {
      logs.push(message);
    },
    getLogs: () => {
      console.log(logs);
    }
  }
};

const errorLogger = createLogger();
errorLogger.log('some error');
errorLogger.log('another error');
errorLogger.getLogs();


const createRandomGenerator = (min, max) => {
  return () => Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomNumberInRange = createRandomGenerator(1, 50);
console.log(getRandomNumberInRange());
