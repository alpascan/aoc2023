
const fs = require('node:fs');



function readInput(file_name) {
  const input = fs.readFileSync(file_name, 'utf8');
  return input.split('\n');
}

input = readInput("ex2.txt");
road = input[0]

input.splice(0, 2).filter(x => x)
a = new Object()
for (let i = 0; i < input.length; i++) {
  f = input[i].replace('(', '').replace(')', '').split(' = ')
  if (f == '') {
    continue
  }
  ii = f[1].split(', ')
  a[f[0]] = { L: ii[0], R: ii[1] }

}
console.log(road)
console.log(a)


let currentNode = 'AAA'
let steps = 0
let directions = road.split('');
console.log(directions)
while (currentNode != 'ZZZ') {
  for (let i in directions) {

    console.log(currentNode + ' ' + i + ' ' + directions[i])
    currentNode = a[currentNode][directions[i]]
    steps += 1
  }
}

console.log(steps)
