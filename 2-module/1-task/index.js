/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  const newObj = {};
  for (const key in obj) {
    if (obj[key] === null) {
      newObj[key] = null;
    } else if (typeof obj[key] === 'object') {
      newObj[key] = clone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
