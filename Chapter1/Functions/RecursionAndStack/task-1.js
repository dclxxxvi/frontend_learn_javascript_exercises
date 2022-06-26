// Ссылка на условие задачи
// https://learn.javascript.ru/recursion#vychislit-summu-chisel-do-dannogo

// Решение с помощью цикла
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100));

// Решение через рекурсию
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

console.log(sumTo(100));


// Решение по формуле арифметической прогрессии
function sumTo(n) {
  return n * (n + 1) / 2;
}

console.log(sumTo(100));
