// Ссылка на условие задачи
// https://learn.javascript.ru/dom-attributes-and-properties#sdelayte-vneshnie-ssylki-oranzhevymi

const selector = 'a[href*="://"]:not([href^="http://internal.com"])';
const links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');
