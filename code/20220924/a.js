function comparison(a, b) {
  if (a == b) {
    return `${a} == ${b}`;
  } else if (a < b) {
    return `${a} < ${b}`;
  } else {
    return `${a} > ${b}`;
  }
}

const t = "333 333";
const x = t.split(" ")
console.log(comparison(Number(x[0]), Number(x[1])))
