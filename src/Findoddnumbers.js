function findOddNumbers(start, end) {
  const oddNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  return oddNumbers;
}

const startNumber = 10;
const endNumber = 20;

const result = findOddNumbers(startNumber, endNumber);
console.log(result);
