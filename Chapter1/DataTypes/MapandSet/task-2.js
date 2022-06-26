// Ссылка на условие задачи
// https://learn.javascript.ru/map-set#otfiltruyte-anagrammy

function aclean(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].toLowerCase().split('').sort().join('');
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
