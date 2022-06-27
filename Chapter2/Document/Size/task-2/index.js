// Ссылка на условие задачи
// https://learn.javascript.ru/size-and-scroll#uznat-shirinu-polosy-prokrutki

const div = document.createElement('div');

div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';

document.body.append(div);
const scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);
