/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
    * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
    */
  this.el = document.createElement('table');

  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const headNames = ['Name', 'Age', 'Salary', 'City'];
  for (let i = 0; i < headNames.length; i += 1) {
    const td = document.createElement('td');
    td.append(headNames[i]);
    headRow.append(td);
  }

  thead.append(headRow);
  this.el.append(thead);

  const tableData = [];
  const tbody = document.createElement('tbody');
  for (let i = 0; i < items.length; i += 1) {
    const row = document.createElement('tr');
    const {
      name, age, salary, city,
    } = items[i];
    const record = [name, age, salary, city];

    tableData[i] = [];
    for (let j = 0; j < record.length; j += 1) {
      const col = document.createElement('td');
      col.append(record[j]);
      row.append(col);
      tableData[i][j] = record[j];
    }

    tbody.append(row);
  }

  this.el.append(tbody);

  /**
    * Метод выполняет сортировку таблицы
    * @param {number} column - номер колонки, по которой
    * нужно выполнить сортировку (отсчет начинается от 0)
    * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
    */
  this.sort = (column, desc = false) => {
    tbody.innerHTML = '';
    const k = desc ? -1 : 1;

    function sortFunctionS(a, b) {
      if (a[column] === b[column]) {
        return 0;
      }
      return (a[column] < b[column]) ? -1 * k : 1 * k;
    }
    function sortFunctionN(a, b) {
      if (a[column] === b[column]) {
        return 0;
      }
      return ((+a[column] < +b[column]) ? -1 * k : 1 * k);
    }

    if (column === 0 || column === 3) {
      tableData.sort(sortFunctionS);
    } else {
      tableData.sort(sortFunctionN);
    }

    for (let i = 0; i < tableData.length; i += 1) {
      const row = document.createElement('tr');

      for (let j = 0; j < tableData[0].length; j += 1) {
        const col = document.createElement('td');
        col.append(tableData[i][j]);
        row.append(col);
      }

      tbody.append(row);
    }

    this.el.append(tbody);
  };
}
