const sample = "3 3\n3 4";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");

const input = sample.trim().split('\n');
for (let i = 0; i < input.length; i++) {
  if (input[i] !== '0 0') {
    const [y,x] = input[i].split(' ').map(Number)
    let str = '';
    const oddLine = (Array(x+1).join("#.")).slice(0,x)+'\n';
    const evenLine = (Array(x+1).join(".#")).slice(0,x)+'\n';
    for (let j = 0; j < y; j++) {
      str += (j % 2 === 0) ? oddLine : evenLine;
    }
    console.log(str)
  }
}

/**
 * 以下のような、たてH cm よこ W cm のチェック柄の長方形を描くプログラムを作成して下さい。
 * 長方形の左上が "#" となるように描いて下さい。
 * #.#.#.#.#.
 * .#.#.#.#.#
 * #.#.#.#.#.
 * .#.#.#.#.#
 * #.#.#.#.#.
 * .#.#.#.#.#
 */

function drawCheckerboard(H, W) {
  let checkerboard = "";
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if ((i + j) % 2 === 0) {
        checkerboard += "#";
      } else {
        checkerboard += ".";
      }
    }
    checkerboard += "\n";
  }
  console.log(checkerboard);
}

drawCheckerboard(6, 10);
