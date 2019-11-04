/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
  let res = m;

  for (let i = 2; i <= n; i += 1) {
    res *= m;
  }
  return res;
}
