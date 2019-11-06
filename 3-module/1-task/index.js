/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let res = '';
  for (let i = 0; i < data.length; i += 1) {
    if (+data[i].age <= age) {
      if (res !== '') { res += '\n'; }
      res += `${data[i].name}, ${data[i].balance}`;
    }
  }
  return res;
}
