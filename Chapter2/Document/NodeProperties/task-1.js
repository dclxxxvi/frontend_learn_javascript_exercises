// Ссылка на условие задачи
// https://learn.javascript.ru/basic-dom-node-properties#schitaem-potomkov

for (let li of document.querySelectorAll('li')) {
  let text = li.firstChild.data;
}

li.getElementsByTagName('li').length;
