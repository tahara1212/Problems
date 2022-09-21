function sumDistance(lines) {
  res = lines.shift().split(" ");
  const distance = Number(res[1]);

  a = lines.filter(line => line <= distance)

  result = a.reduce((sum, elem) => {
      return Number(sum) + Number(elem);
  }, 0);
  console.log(result)
}

sumDistance(["5 10", "5", "6", "25", "4"]);
