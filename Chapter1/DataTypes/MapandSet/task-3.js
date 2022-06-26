// Ссылка на условие задачи
// https://learn.javascript.ru/map-set#perebiraemye-klyuchi

const map = new Map();

map.set('name', 'John');

const keys = Array.from(map.keys());

keys.push('more');

console.log(keys);
