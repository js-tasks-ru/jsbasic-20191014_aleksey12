/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  const tbody = table.querySelector('tbody');
  const tabRows = tbody.querySelectorAll('tr');

  for (let i = 0; i < tabRows.length; i += 1) {
    const tabCols = tabRows[i].querySelectorAll('td');

    // Проставит класс available/unavailable, в зависимости
    // от значения атрибута data-available у ячейки Status
    // Проставит атрибут hidden, если атрибута data-available нет вообще
    if ('available' in tabCols[3].dataset === false) {
      tabRows[i].hidden = true;
    } else if (tabCols[3].dataset.available === 'true') {
      tabRows[i].classList.add('available');
    } else {
      tabRows[i].classList.add('unavailable');
    }

    // Проставит класс male/female, в зависимости от содержимого ячейки Gender
    if (tabCols[2].innerHTML === 'm') {
      tabRows[i].classList.add('male');
    } else if (tabCols[2].innerHTML === 'f') {
      tabRows[i].classList.add('female');
    }

    // Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18
    if (+tabCols[1].innerHTML < 18) {
      tabRows[i].style.textDecoration = 'line-through';
    }
  }
}
