// Ссылка на условие задачи
// https://learn.javascript.ru/call-apply-decorators#dekorator-shpion

function spy(func) {

  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, arguments);
  }

  wrapper.calls = [];

  return wrapper;
}


