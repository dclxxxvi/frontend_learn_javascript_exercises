// Ссылка на условие задачи
// https://learn.javascript.ru/css-selectors#vyberite-elementy-selektorom

function test(selector, count) {
  var elems = document.querySelectorAll(selector);
  var ok = (elems.length == count);

  if (!ok) alert(selector + ": " + elems.length + " != " + count);
  else console.log(ok);
}

test('input[type="checkbox"]', 2);

test('input[type="checkbox"]:not(:checked)', 1);

test('[id|="message"]', 6);

test('[id^="message-"]', 5);

test('a[href$=".zip"]', 1);

test('[data-action~="delete"]', 2);

test('[data-action]:not([data-action~="delete"])', 1);

test('#messages li:nth-child(2n)', 3);

test('h3#widget-title + *', 1);

test('h3#widget-title ~ a', 2);

test('#messages li:last-child a', 1);
