// Ссылка на условие задачи
// https://learn.javascript.ru/recursion#vyvod-odnosvyaznogo-spiska-v-obratnom-poryadke

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);
