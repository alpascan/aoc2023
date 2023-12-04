const fs = require('node:fs');

const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
function readInput(file_name) {
  const input = fs.readFileSync(file_name, 'utf8');
  return input.split('\n');
}

function stringHasNumber(str) {
  for (let i = 0; i < numbers.length; i++) {
    if (str.join('').startsWith(numbers[i])) {
      return i + 1
    }
  }
  return null;
}

function isDigit(x) {
  return /^\d$/.test(x);
}
function first_int(str) {
  for (let i = 0; i < str.length; i++) {
    if (isDigit(str[i])) {
      return str[i];
    }
    substrAsNumber = stringHasNumber(str.slice(i))


    if (substrAsNumber) {

      return String(substrAsNumber);
    }
  }
}

function last_int(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (isDigit(str[i])) {
      return str[i];
    }

    substrAsNumber = stringHasNumber(str.slice(i));
    if (substrAsNumber) {
      return String(substrAsNumber);
    }
  }
}
a = readInput('official.txt');

console.log(a)
b = a.map(line => first_int(line.split('')) + last_int(line.split('')))
console.log(b)

c = b.filter(x => x).reduce((a, b) => parseInt(a) + parseInt(b));
console.log(c)

