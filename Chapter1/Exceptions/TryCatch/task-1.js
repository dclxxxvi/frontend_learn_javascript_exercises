// Ссылка на условие задачи
// https://learn.javascript.ru/try-catch#finally-ili-prosto-kod

function f() {
  try {
    console.log('начало');
    return "result";
  } catch (e) {
    /// ...
  } finally {
    console.log('очистка!');
  }
}

f();
