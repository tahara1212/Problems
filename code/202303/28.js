const x = "1 2";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const [a, b] = Array.from(x.split(" "), Number);
if (a < b) {
  console.log("a < b");
} else if (a > b) {
  console.log("a > b");
} else if (a === b) {
  console.log("a == b");
}

/**
 * ２つの整数 a, b を読み込んで、a と b の大小関係を出力するプログラムを作成して下さい。
 */
