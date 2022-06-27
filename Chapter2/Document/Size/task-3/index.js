// Ссылка на условие задачи
// https://learn.javascript.ru/size-and-scroll#pomestite-myach-v-tsentr-polya

ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px'
ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px'
