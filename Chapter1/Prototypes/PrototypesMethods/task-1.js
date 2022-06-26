// Ссылка на условие задачи
// https://learn.javascript.ru/prototype-methods#dobavte-tostring-v-slovar

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    }
  }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for (let key in dictionary) {
  console.log(key);
}

console.log(dictionary);
