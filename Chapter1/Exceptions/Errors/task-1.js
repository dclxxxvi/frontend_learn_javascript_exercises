// Ссылка на условие задачи
// https://learn.javascript.ru/custom-errors#nasledovanie-ot-syntaxerror

class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
  }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message);
console.log(err.name);

console.log(err instanceof SyntaxError); // true
