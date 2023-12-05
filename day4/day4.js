

function readFromFile(fileName) {
  const fs = require('fs');
  const data = fs.readFileSync(fileName, 'utf8');
  return data.split('\n');
}

a = readFromFile('ex2.txt').filter(x => x).map(function(x) {
  spl = x.split(':')[1].trim().split('|')
  return { winners: spl[0].split(' ').filter(x => x).map(x => parseInt(x)), numbers: spl[1].split(' ').filter(x => x).map(x => parseInt(x)) }
});

console.log(a);

winningNumbers = a.map(x => x.numbers.map(y => x.winners.includes(y) ? 1 : 0).reduce((a, b) => a + b))

points = winningNumbers.map(x => x > 0 ? Math.pow(2, x - 1) : 0).reduce((a, b) => a + b);

scratch = new Array(winningNumbers.length).fill(1)

scratch[0] = 1

for (let i = 0; i < winningNumbers.length; i++) {
  console.log(`Itter ${i}: ${scratch}`);
  for (let j = 0; j < winningNumbers[i]; j++) {
    console.log(`Adding ${scratch[i]} to index ${i + j + 1}`);
    scratch[i + j + 1] += scratch[i];

  }
}
console.log(winningNumbers);
console.log(scratch.reduce((a, b) => a + b))

