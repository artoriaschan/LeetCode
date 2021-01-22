/**
 * @param {number} n
 * @return {number}
 */
function numberOfMatches(n) {
  let res = 0;
  while (n > 1) {
    if (n % 2) {
      res += (n - 1) / 2;
      n = (n - 1) / 2 + 1;
    } else {
      res += n / 2;
      n /= 2;
    }
  }
  return res;
}
