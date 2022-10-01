function circle(radius) {
  const area = radius * radius * 3.141592653589;
  const circumference = radius * 2 * 3.141592653589;
  console.log(`${area.toFixed(6)} ${circumference.toFixed(6)}`);
}

const input = 3;
const r = parseFloat(input);
circle(r)
