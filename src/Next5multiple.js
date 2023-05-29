function FindNumbers(number, count) {
  const multiplies = [];
  for (let i = 0; i < count; i++) {
    const multiplie = number * i;
    multiplies.push(multiplie);
  }
  return multiplies;
}

var number = 2;
var count = 5;
const result = FindNumbers(number, count);
console.log(result);
