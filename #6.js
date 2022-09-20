function sumPairs(numbers, result) {
  var res = null;
  for (let i = 0; i < numbers.length; i++) {
    numbers.map((number, index) => {
      if (res === null && index != i) {
        if (number + numbers[i] === result) {
          res = [numbers[i], number];
        }
      }
    });
  }

  return res;
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));

//[2, 2, 3, 1] y 4, debería ser [2, 2]
