// Ссылка на условие задачи
// https://learn.javascript.ru/closure#armiya-funktsiy

function makeArmy() {
  const shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = () => console.log(j);
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
