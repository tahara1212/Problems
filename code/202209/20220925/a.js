function timeConversion(s) {
  const h = Math.floor(s / 3600);
  const m = Math.floor(s % 3600 / 60);
  const rem = s % 60;
  return `${h}:${m}:${rem}`;
}

console.log(timeConversion(46979));
