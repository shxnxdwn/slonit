'use strict';

const pricesOfTheBestBuyers = [10000, 20000, 30000];


const calcSumOfPrices = (prices) => {
  let finalPrice = 0;

  prices.forEach((price) => finalPrice += price);

  return finalPrice;
}

console.log(calcSumOfPrices(pricesOfTheBestBuyers));
