const sample = "3 3\n4 5\n5 4\n0 0";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const input = sample.trim().split('\n');
for (let i = 0; i < input.length; i++) {
  if (input[i] !== '0 0') {
    const [x,y] = input[i].split(' ').map(Number)
    console.log("#".repeat(y)+"\n"+("#"+".".repeat(y-2)+"#\n").repeat(x-2)+"#".repeat(y)+"\n");
  }
}

/**
 * 以下のような、たてH cm よこ W cm の枠を描くプログラムを作成して下さい。
 * ##########
 * #........#
 * #........#
 * #........#
 * #........#
 * ##########
 */
