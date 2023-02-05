const findOppositeNumber = (n, number) => {
  const haftN = n / 2;
  for (let i = 0; i < n; i++) {
    if (haftN > number) return n / 2 + number;
    else return number - n / 2;
  }
};
console.log(findOppositeNumber(8, 1));
console.log(findOppositeNumber(8, 3));
console.log(findOppositeNumber(8, 4));
console.log(findOppositeNumber(8, 7));
