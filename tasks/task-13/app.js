'use strict';

const OPERATIONS = Object.freeze({
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => a / b
});

const simpleCalculate = (a, b, operation) => OPERATIONS[operation](a, b);

const selectedOperation = 'multiplication';
console.log(simpleCalculate(6, 3, selectedOperation));
