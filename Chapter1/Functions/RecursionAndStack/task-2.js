// Ссылка на условие задачи
// https://learn.javascript.ru/recursion#vychislit-faktorial

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5));
