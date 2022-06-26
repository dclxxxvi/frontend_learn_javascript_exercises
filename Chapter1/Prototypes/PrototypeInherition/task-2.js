// Ссылка на условие задачи
// https://learn.javascript.ru/prototype-inheritance#pochemu-naedayutsya-oba-homyaka

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
