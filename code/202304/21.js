const sample = "3 4\n5 6\n2 2\n0 0";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const input = sample.trim().split('\n');
const res = input.reduce((acc, crr) => {
  const [h, w] = Array.from(crr.split(' '), Number)
  for (let i = 0; i < h; i++) {
    if (h === 0 && w === 0) break
    acc += `${Array(w+1).join('#')}\n`
  }
  return `${acc}\n`;
}, '')
console.log(res)

/**
 * たてH cm よこ W cm の長方形を描くプログラムを作成して下さい。
 * 1 cm × 1cm の長方形を '#'で表します。
 */
