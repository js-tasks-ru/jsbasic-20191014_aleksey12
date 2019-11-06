/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let j = 0;
  const num = [];
  let tryStr;
  const res = {};

  num[0] = '';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.substr(i, 1);
    if (Number(char) || char === '0') {
      num[j] += str.substr(i, 1);
    } else if (char === '.' || char === '+' || char === '-') {
      num[j] += str.substr(i, 1);
    } else if (num[j] !== '') {
      j += 1;
      num[j] = '';
    }
  }

  j = 0;
  res.min = num[j];
  res.max = res.min;

  for (let i = 0; i < num.length; i += 1) {
    tryStr = parseFloat(num[i]);
    if (tryStr) {
      if (tryStr < res.min) { res.min = tryStr; }
      if (tryStr > res.max) { res.max = tryStr; }
    }
  }

  return res;
}
