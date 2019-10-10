'use strict';

// Kata: https://www.codewars.com/kata/count-letters-in-string/train/javascript
const letterCount = string => {
  const counters = {};
  for (const char of string.split('')) {
    if (char === char.toLowerCase()) {
      const count = counters[char] || 0;
      counters[char] = count + 1;
    }
  }
  return counters;
};
console.log(letterCount('arithmetics'));


// Kata: https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript
const deleteNth = (arr, n) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if ((result.filter(x => x === elem).length) < n) {
      result.push(elem);
    }
  }
  return result;
};
console.log(deleteNth([20, 37, 20, 21], 1));


// Kata:
