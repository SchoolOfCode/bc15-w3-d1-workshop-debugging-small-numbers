function countNumberOfNinesInNumber(number) {
  let count = 0;

  for (let i = 0; i < number.toString().length; i++) {
    const digit = number.toString()[i];
    if ("9" === digit) {
      count++;
    }
  }

  return count;
}
