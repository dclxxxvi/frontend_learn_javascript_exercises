// Ссылка на условие задачи
// https://learn.javascript.ru/modifying-document#sozdayte-spisok

let ul = document.createElement('ul');
document.body.append(ul);

while (true) {
  let data = prompt("Введите текст для элемента списка", "");

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  ul.append(li);
}
