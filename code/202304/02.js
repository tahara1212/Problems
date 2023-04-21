let x = require("fs").readFileSync("/dev/stdin", "utf8");

const [a, b, c] = Array.from(x.split(" ").sort(), Number);
console.log(`${a} ${b} ${c}`)

/**
 * ３つの整数を読み込み、値が小さい順に並べて出力するプログラムを作成して下さい。
 */
