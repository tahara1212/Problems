const sample = "1 1 1";
// let x = require("fs").readFileSync("/dev/stdin", "utf8");
const [a, b, c] = Array.from(sample.trim().split(" "), Number);
let res = 0;

for (let i = a; i <= b; i++) {
  if (c % i === 0) {
    res++;
  }
}
console.log(res)
