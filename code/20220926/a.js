function range(num) {
  const stringNumList = num.split(" ");
  const numbers = stringNumList.map((num) => {
    return Number(num);
  });
  if (numbers[0] < numbers[1] && numbers[1] < numbers[2]) {
    console.log("Yes");
  } else {
    console.log("No");
  };
}

range("10 10 12");
