function circleInRectangle(inputVal) {
  const inputValList = inputVal.split(" ");
  const w = Number(inputValList[0]);
  const h = Number(inputValList[1]);
  const x = Number(inputValList[2]);
  const y = Number(inputValList[3]);
  const r = Number(inputValList[4]);
  const hankei = w - x;

  if (x >= 0 && x < w && y >= 0 && y < h && r >= 0 && r <= hankei) {
    console.log("Yes");
  } else {
    console.log("No")
  }
}

const sampleInput = "30 50 15 25 20";
circleInRectangle(sampleInput)
