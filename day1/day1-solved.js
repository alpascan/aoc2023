const fs = require('node:fs');


function readInput(file_name) {
  const input = fs.readFileSync(file_name, 'utf8');
  return input.split('\n');
}

function isDigit(x) {
  return /^\d$/.test(x);
}
function first_int(str) {
  for (let i = 0; i < str.length; i++) {
    if (isDigit(str[i])) {
      return str[i];
    }
  }
}

function last_int(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    if (isDigit(str[i])) {
      return str[i];
    }
  }
}
a = readInput('ex1.txt');

console.log(a);
b = a.map(line => first_int(line.split('')) + last_int(line.split(''))).filter(x => x).reduce((a, b) => parseInt(a) + parseInt(b));

console.log(b);
