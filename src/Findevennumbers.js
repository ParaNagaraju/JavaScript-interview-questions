function findevenNumbers(start, end) {
    const evenNumbers = [];
  
    for (let i = start; i <= end; i++) {
      if (i % 2 === 0) {
        evenNumbers.push(i);
      }
    }
  
    return evenNumbers;
  }
  
  const startNumber = 10;
  const endNumber = 20;
  
  const result = findevenNumbers(startNumber, endNumber);
  console.log(result);
  