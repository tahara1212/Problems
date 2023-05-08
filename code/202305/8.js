const sample = "10\n838 758 113 515 51 627 10 419 212 86";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
const x = input.trim().split('\n');
const arr = (x[1]).split(' ')
arr.reverse()
console.log(arr.join(" "))

/**
 * 与えられた数列を逆順に出力するプログラムを作成して下さい。
 */
