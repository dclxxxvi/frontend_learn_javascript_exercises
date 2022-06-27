// Ссылка на условие задачи
// https://learn.javascript.ru/modifying-document#ochistite-element

function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

const elem = document.querySelector('#elem');

clear(elem);
