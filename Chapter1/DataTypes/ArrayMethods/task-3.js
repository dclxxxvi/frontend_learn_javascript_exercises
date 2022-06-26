// Ссылка на условие задачи
// https://learn.javascript.ru/array-methods#filtratsiya-po-diapazonu-na-meste

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

const arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
