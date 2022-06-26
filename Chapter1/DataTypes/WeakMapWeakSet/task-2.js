// Ссылка на условие задачи
// https://learn.javascript.ru/weakmap-weakset#hranenie-vremeni-prochteniya

const messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' }
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2022, 6, 23));
