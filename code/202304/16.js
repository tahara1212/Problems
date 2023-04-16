// const sample = '3\n5\n11\n7\n8\n19\n0\n'
// const input = Array.from(sample.trim().split("\n"), Number);
let x = require("fs").readFileSync("/dev/stdin", "utf8");
const input = Array.from(x.trim().split("\n"), Number);

input.map((x, i) => {
  if (x === 0) return;
  console.log(`Case ${i + 1}: ${x}`);
});
