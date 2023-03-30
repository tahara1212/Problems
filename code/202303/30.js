const x = "10 10 12";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const [a, b, c] = Array.from(x.split(" "), Number);
if (a < b && b < c) {
  console.log("Yes");
} else {
  console.log("No");
}

/**
 * ３つの整数a, b, cを読み込み、それらが a < b < cの条件を満たすならば"Yes"を、満たさないならば"No"を出力するプログラムを作成して下さい。
 */
