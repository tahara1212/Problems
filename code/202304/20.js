const sample = "5\n10 1 5 4 17";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const [a, b] = sample.trim().split("\n");
const num = Array.from(b.split(' '), Number)
const sum = num.reduce((sum, num) => {
  return sum + num
}, 0)
console.log(`${Math.min(...num)} ${Math.max(...num)} ${sum}`);

/**
 * n 個の整数を入力し、それらの最小値、最大値、合計値を求めるプログラムを作成してください。
 */
