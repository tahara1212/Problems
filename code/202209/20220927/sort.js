function sort(num) {
    const numSplit = num.split(" ");
    const numbers = numSplit.map((num) => {
      return Number(num);
    });
    const res = numbers.sort((a, b) => {
      return a < b ? -1 : 1;
    })
    console.log(res.join().replace(/,/g, ' '))
}

// let x = require("fs").readFileSync("/dev/stdin", "utf8");
sort("10000 1000 100")
