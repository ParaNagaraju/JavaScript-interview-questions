function checkDigitsOrder(number) {
    const digits = number.toString().split('');
   const length =digits.length;
    for (let i = 0; i < length - 1; i++) {
      if (parseInt(digits[i]) > parseInt(digits[i + 1])) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const number = 12345;
  const result = checkDigitsOrder(number);
  console.log(result);
  