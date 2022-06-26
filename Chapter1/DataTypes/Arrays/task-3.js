// Ссылка на условие задачи
// https://learn.javascript.ru/array#podmassiv-naibolshey-summy

function getMaxSubSum(array) {
  let maxAmount = 0;
  let intermediateSum = 0;

  for (let elem of array) {
    intermediateSum += elem;
    maxAmount = Math.max(maxAmount, intermediateSum);
    if (intermediateSum < 0) intermediateSum = 0;
  }

  return maxAmount;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));
