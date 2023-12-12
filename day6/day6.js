

const fs = require('node:fs');

function readInput(file_name) {
  const input = fs.readFileSync(file_name, 'utf8');
  return input.split('\n');
}

input = readInput("ex2.txt");

const calculate_number_of_record_wins = (time, distance) => {
  for (let i = 1; i < time / 2; i++) {
    if (i * (time - i) > distance) {
      console.log(i);
      return time - 2 * i + 1;
    }
  }
}

input_parsed = input.map(line => line.split(': ')[1].split(' ').filter(x => x));

records = []

input_parsed[0].forEach((v, i) => {
  records.push({
    time: input_parsed[0][i],
    distance: input_parsed[1][i],
  });
});

distance = input_parsed[1].reduce((a, b) => `${a}${b}`);
time = input_parsed[0].reduce((a, b) => `${a}${b}`);

results_p1 = records.map(record => calculate_number_of_record_wins(record.time, record.distance)).reduce((a, b) => a * b);

console.log(distance);
console.log(time);

results_p2 = calculate_number_of_record_wins(time, distance);

console.log(results_p2);
