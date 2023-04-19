const sample = "1 + 2\n56 - 18\n13 * 2\n100 / 10\n27 + 81\n0 ? 0\n";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");
const calc = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.floor(a / b),
};
const inputList = sample.trim().split("\n")
Array.from(inputList, (input) => {
  const [a, op, b] = input.split(" ");
  if (op === '?') return
  console.log(calc[op](Number(a), Number(b)));
});

/**
 * ２つの整数 a, b と１つの演算子 op を読み込んで、a op b を計算するプログラムを作成して下さい。
 * ただし、演算子 op は、"+"(和)、"-"(差)、"*"(積)、"/"(商)、のみとし、割り算で割り切れない場合は、小数点以下を切り捨てたものを計算結果とします。
 */
