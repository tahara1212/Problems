const sample = "3 2\n2 2\n5 3\n0 0\n0 1\n1 0\n10 10";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");
// const input = Array.from(x.trim().split("\n"), Number);
const input = Array.from(sample.trim().split("\n"), (c) => {
  const [a, b] = Array.from(c.split(' '), Number);
  if (a === 0 && b === 0) {
    return
  } else if (a < b) {
    console.log(`${a} ${b}`)
  } else {
    console.log(`${b} ${a}`)
  }
});

/**
 * ２つの整数 x, y を読み込み、それらを値が小さい順に出力するプログラムを作成して下さい。
 * ただし、この問題は以下に示すようにいくつかのデータセットが与えられることに注意して下さい。
 */
