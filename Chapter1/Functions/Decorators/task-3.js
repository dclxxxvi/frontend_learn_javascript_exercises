// Ссылка на условие задачи
// https://learn.javascript.ru/call-apply-decorators#dekorator-debounce

function debounce(f, ms) {

  let isCooldown = false;

  return function () {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };

}
