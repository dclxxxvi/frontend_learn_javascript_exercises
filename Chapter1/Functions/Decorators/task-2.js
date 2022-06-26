// Ссылка на условие задачи
// https://learn.javascript.ru/call-apply-decorators#zaderzhivayuschiy-dekorator

function delay(f, ms) {

  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };

}

let f1000 = delay(console.log, 1000);

f1000("test");
