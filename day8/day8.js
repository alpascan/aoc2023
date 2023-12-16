
const fs = require('node:fs');



function readInput(file_name) {
  const input = fs.readFileSync(file_name, 'utf8');
  return input.split('\n');
}

input = readInput("ex1.txt");
road = input[0]

input.splice(0, 2).filter(x => x)
a = new Object()
for (let i = 0; i < input.length; i++) {
  f = input[i].replace('(', '').replace(')', '').split(' = ')
  ii = f[1].split(', ')
  console.log(f[0], ii)
  a[f[0]] = { left: ii[0], right: ii[1] }

}
console.log(road)
console.log(a)


