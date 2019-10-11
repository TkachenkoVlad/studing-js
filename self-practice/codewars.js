'use strict';
//alert: all of kata are expand for JETBRAINS IDEA

//<editor-fold desc="Kata: https://www.codewars.com/kata/count-letters-in-string/train/javascript">
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
//</editor-fold>

//<editor-fold desc="Kata: https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript">
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
//</editor-fold>

//<editor-fold desc="Kata: https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/train/javascript">
const encrypt = (text, n) => {
  if (text === null || text === '' || n <= 0) {
    return text
  }
  n--;
  let first = [];
  let second = [];
  let splitArray = text.split('');

  for (const i in splitArray) {
    if (i % 2 !== 0) {
      first.push(splitArray[i]);
    } else if (i % 2 === 0) {
      second.push(splitArray[i]);
    }
  }
  let encrypted = first.concat(second).join('');
  if (!n === 1) {
    return encrypted;
  } else {
    return encrypt(encrypted, n)
  }
};
console.log(encrypt("This is a test!", 1));

const decrypt = (encryptedText, n) => {
  if (encryptedText === null || encryptedText === '' || n <= 0) {
    return encryptedText
  }
  n--;

// TODO : decrypt function

};
//</editor-fold>

//<editor-fold desc ="Kata: https://www.codewars.com/kata/multiples-of-3-or-5/train/javascript">
const solution = number => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};
console.log(solution(10));
//</editor-fold>

//<editor-fold desc ="Kata: https://www.codewars.com/kata/split-strings/train/javascript">
// TODO : need find better implementation for this task
const solution1 = str => {
  let splitArray = str.split('');
  if (splitArray.length % 2 === 1) splitArray.push('_');
  let resultArray = new Array(splitArray.length / 2);

  for (let i = 0; i < splitArray.length; i++) {
    if (i % 2 === 0) {
      for (let j = i; j < splitArray.length; ++j) {
        resultArray[i] = splitArray[i];
        if (resultArray[i].length < 2 && resultArray[i] !== splitArray[j]) {
          resultArray[i] += splitArray[j];
          break;
        }
      }
    }
  }
  resultArray = resultArray.filter(elem => elem.length > 1);
  return resultArray;
};
console.log(solution1('abc'));
// solution2 it's better way for realisation this kata
const solution2 = str => {
  let arr = [];
  let second = String();
  for (let i = 0; i < str.length; i += 2) {
    second = str[i + 1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
};
console.log(solution2('abc'));
//</editor-fold>
