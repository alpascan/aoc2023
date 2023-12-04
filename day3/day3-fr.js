const { warn } = require('console');


function readFromFile(fileName) {
  const fs = require('fs');
  const data = fs.readFileSync(fileName, 'utf8');
  return data.split('\n');
}

a = readFromFile('ex1.txt').map(x => x.split(''))

function isDigit(x) {
  return x >= '0' && x <= '9';
}

function numberArrayIsPartNumber(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (!isDigit(a[i][j]) && a[i][j] != '.') {
        return true;
      }
    }
  }
  return false
}

function fetchStarCoordsFromMatrix(arr) {
  let coords = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == '*') {
        coords.push([i, j]);
      }
    }
  }
  return coords;
}

sum = 0;
stars = {}
for (let i = 0; i < a.length; i++) {
  number_start = -1;
  for (let j = 0; j < a[i].length; j++) {
    if (isDigit(a[i][j])) {
      if (number_start == -1) {
        number_start = j;
      }
      if (j == a[i].length - 1) {
        number_end = j;
        array_start = (number_start == 0 ? 0 : number_start - 1)
        array_end = (number_end == a[i].length ? a[i].length : number_end + 1)
        index_on_top = (i == 0 ? 0 : i - 1)
        index_on_bottom = (i == a.length - 1 ? a.length - 1 : i + 1)
        array = a.slice(index_on_top, index_on_bottom + 1).map(x => x.slice(array_start, array_end))
        console.log(array);
        if (numberArrayIsPartNumber(array)) {
          console.log("Part number");
          number = parseInt((a[i].slice(number_start, number_end + 1)).join(''));
          console.log(number);
          sum += number;
        }
        number_start = -1;
      }

    } else {
      if (number_start != -1) {
        number_end = j;
        array_start = (number_start == 0 ? 0 : number_start - 1)
        array_end = (number_end == a[i].length ? a[i].length : number_end + 1)
        index_on_top = (i == 0 ? 0 : i - 1)
        index_on_bottom = (i == a.length - 1 ? a.length - 1 : i + 1)

        array = a.slice(index_on_top, index_on_bottom + 1).map(x => x.slice(array_start, array_end))
        console.log(array);

        if (numberArrayIsPartNumber(array)) {
          console.log("Part number");
          number = parseInt((a[i].slice(number_start, number_end)).join(''));
          sum += number;
        }
        number_start = -1;
      }
    }

  }
}

console.log(sum);

console.log(stars);
