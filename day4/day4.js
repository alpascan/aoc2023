

function readFromFile(fileName) {
  const fs = require('fs');
  const data = fs.readFileSync(fileName, 'utf8');
  return data.split('\n');
}

a = readFromFile('ex1.txt').filter(x => x).map(function(x) {
  spl = x.split(':')[1].trim().split('|')
  return { winners: spl[0].split(' ').filter(x => x).map(x => parseInt(x)), numbers: spl[1].split(' ').filter(x => x).map(x => parseInt(x)) }
});

console.log(a);

winningNumbers = a.map(x => x.numbers.map(y => x.winners.includes(y) ? 1 : 0).reduce((a, b) => a + b))

points = winningNumbers.map(x => x > 0 ? Math.pow(2, x - 1) : 0).reduce((a, b) => a + b);

a = new Array(winningNumbers.length).fill(0)

a[0] = 1

//for (let i = 1; i < a.length; i++) {
//  for (let j = i + 1; i <= i + winningNumbers[i]; j++) {
//    a[j] += 1
//  }
//}


winningNumbers.forEach(function(x, i) { for (let j = i + 1; j <= i + x; j++) { a[j] += 1 } })
console.log(winningNumbers);
console.log(a);

