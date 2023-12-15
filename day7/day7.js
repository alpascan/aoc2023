
const fs = require('node:fs');

function calculateCardPower(card) {
  switch (card) {
    case 'A':
      return '13';
    case 'K':
      return '12';
    case 'Q':
      return '11';
    case 'J':
      return '01';
    case 'T':
      return '10';
    default:
      return `0${card}`
  }
}


function reverseCalulateCardPower(card) {
  switch (card) {
    case '13':
      return 'A';
    case '12':
      return 'K';
    case '11':
      return 'Q';
    case '01':
      return 'J';
    case '10':
      return 'T';
    default:
      return parseInt(card).toString();
  }
}

function calculateHandPower(card) {
  cardDict = {}
  for (let i = 0; i < card.length; i++) {
    p = calculateCardPower(card[i]);
    if (p in cardDict) {
      cardDict[p] += 1
    } else {
      cardDict[p] = 1
    }
  }

  if ('01' in cardDict) {
    console.log('Found 01');
    console.log(cardDict);
    console.log(card);

    jokerTimes = cardDict['01'];
    delete cardDict['01'];
    if (Object.keys(cardDict).length > 0) {
      maxKey = Object.keys(cardDict).reduce((a, b) => cardDict[a] > cardDict[b] ? a : b);
      console.log('MaxKey is ' + maxKey + 'and its value is ' + cardDict[maxKey])
      cardDict['01'] = cardDict[maxKey] + jokerTimes
      delete cardDict[maxKey];

      // card = card.replace(new RegExp(reverseCalulateCardPower(maxKey), 'g'), 'J');
      console.log('New CardDict');
      console.log(cardDict)
    }
    else {
      cardDict['01'] = jokerTimes;
    }

  }

  console.log(cardDict);
  let handPower = 0;
  for (i in cardDict) {
    console.log("This is cardDict[i]" + cardDict[i])
    switch (cardDict[i]) {
      case 2:
        handPower += 1;
        break;
      case 3:
        handPower += 3;
        break;
      case 4:
        handPower += 6;
        break;
      case 5:
        handPower += 9;
        break;
    }
  }

  numberMaybePart2 = Object.keys(cardDict).map(x => x.repeat(cardDict[x])).sort((a, b) => parseInt(b) - parseInt(a)).join('');
  number = card.split('').map(x => calculateCardPower(x)).join('');
  return handPower + number;
}

function readInput(file_name) {
  const input = fs.readFileSync(file_name, 'utf8');
  return input.split('\n');
}

input = readInput("ex2.txt");



cards = input.map(function(line) {
  a = line.split(' ');
  return {
    cards: a[0],
    bids: a[1],
    cardPower: calculateHandPower(a[0]),
  }
}).sort((a, b) => parseInt(a.cardPower) - parseInt(b.cardPower))

c = cards.map((x, i) => parseInt(x.bids) * (i + 1))

d = c.reduce((a, b) => a + b);

console.log(cards);

console.log(input.length);
console.log(c)
console.log(c.reduce((a, b) => a + b));
console.log(calculateHandPower('JJJKK'));
