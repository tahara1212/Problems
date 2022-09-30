function division(val) {
  const numSplit = val.split(" ");
  const numbers = numSplit.map((num) => {
    return Number(num);
  });
  const a = Math.floor(numbers[0] / numbers[1]);
  const b = numbers[0] % numbers[1];
  const c = numbers[0] / numbers[1];
  const d = c.toFixed(5);
  console.log(`${a} ${b} ${d}`)
}

const input = "3 2";
division(input);
