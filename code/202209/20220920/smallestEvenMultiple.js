/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
  let res = 2;
  for (var i = 1; i <= n; i ++) {
    if (res * i === n) {
      res = res * i;
      break;
    } else if (res === n) {
      break;
    } else if (res * i > n) {
      n = n * 2;
    }
  }
  return res;
};

console.log(smallestEvenMultiple(1));
