/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = [...Array(n)].map((v, index) => {
        return index + 1;
      });
    const res = arr.map((num) => {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return String(num);
        }
    });
    return res;
};