const x = '3 2';
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const [a, b] = Array.from(x.split(' '), Number)
console.log(`${Math.floor(a / b)} ${Math.floor(a % b)} ${(a / b).toFixed(5)}`);

/**
 * ２つの整数 a と b を読み込んで、以下の値を計算するプログラムを作成して下さい。
 * ・ a ÷ b ： d (整数)
 * ・ a ÷ b の余り ： r (整数)
 * ・ a ÷ b ： f (浮動小数点数)
 */
