// Ссылка на условие задачи
// https://learn.javascript.ru/date#skolko-segodnya-proshlo-sekund

function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;
  return Math.round(diff / 1000);
}

console.log(getSecondsToday());
