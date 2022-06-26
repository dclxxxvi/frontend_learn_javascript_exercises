// Ссылка на условие задачи
// https://learn.javascript.ru/object#summa-svoystv-obekta

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let amount = 0;
for (let key in salaries) {
  amount = amount + salaries[key];
}

console.log(amount);
