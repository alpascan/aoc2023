
function readFromFile(fileName) {
  const fs = require('fs');
  const input = fs.readFileSync(fileName, 'utf8');
  return input.split('\n');
}

obj = {
  red: 12,
  green: 13,
  blue: 14,
}

a = readFromFile('ex2.txt');

//b = a.map(x => x.split(': ').slice(-1).map(y => y.split('; ').map(z => z.split(',').map(function z(x) {
//  str = x.trim().split(' ');
//  return obj[str[1]] < parseInt(str[0])

b = a.map(x => x.split(': ').slice(-1).map(y => y.split('; ').map(function(x) {
  str = x.trim().split(', ')
  z = {
    red: 0,
    blue: 0,
    green: 0,
  }
  for (i = 0; i < str.length; i++) {
    z[str[i].split(' ')[1]] = parseInt(str[i].split(' ')[0])
  }
  return z
}))[0])

sum = 0

for (i in b) {
  min_red = Math.max(...b[i].map(x => x.red))
  min_green = Math.max(...b[i].map(x => x.green))
  min_blue = Math.max(...b[i].map(x => x.blue))
  console.log(min_red, min_green, min_blue)
  sum += min_red * min_green * min_blue
}

console.log(sum)
