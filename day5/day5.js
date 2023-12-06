function readFromFile(fileName) {
  const fs = require('fs');
  const data = fs.readFileSync(fileName, 'utf8');
  return data
}

a = readFromFile('ex2.txt').split('\n\n')

seeds = a[0].split(':')[1].trim().split(' ').map(x => parseInt(x))
maps = {
  seedToSoilMap: a[1].split(':\n')[1].split('\n').map(x => x.split(' ').map(y => parseInt(y))),
  soilToFertilizerMap: a[2].split(':\n')[1].split('\n').map(x => x.split(' ').map(y => parseInt(y))),
  fertilizerToWaterMap: a[3].split(':\n')[1].split('\n').map(x => x.split(' ').map(y => parseInt(y))),
  waterToLightMap: a[4].split(':\n')[1].split('\n').map(x => x.split(' ').map(y => parseInt(y))),
  lightToTemperatureMap: a[5].split(':\n')[1].split('\n').map(x => x.split(' ').map(y => parseInt(y))),
  temperatureToHumidityMap: a[6].split(':\n')[1].split('\n').map(x => x.split(' ').map(y => parseInt(y))),
  humidityToLocationMap: a[7].split(':\n')[1].split('\n').filter(x => x).map(x => x.split(' ').map(y => parseInt(y))),
}
console.log(a)
console.log(maps)


const getIndexFromMatrix = (initialIndex, matrix) => { // 0, 1
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i])
    console.log(initialIndex)
    if (initialIndex >= matrix[i][1] && initialIndex <= (matrix[i][2] + matrix[i][1])) {
      return initialIndex - matrix[i][1] + matrix[i][0]
    }
  }
  return initialIndex
}


const calculateIndexesThroughMaps = (initialIndex, maps) => {
  for (const key in maps) {
    console.log(`Going through ${key} with ${initialIndex}`)
    initialIndex = getIndexFromMatrix(initialIndex, maps[key])
  }
  return initialIndex
}

locations = seeds.map(x => calculateIndexesThroughMaps(x, maps))

console.log(locations)
console.log(Math.min(...locations))


seedRanges = seeds.map((_, i) => i % 2 === 0 ? seeds.slice(i, i + 2) : null).filter(x => x)

newSeeds = seedRanges.map(x => {
  return new Array(x[1]).fill(x[0]).map((y, i) => y + i)
}).flat()

min = calculateIndexesThroughMaps(newSeeds[0], maps)

for (let i = 1; i < newSeeds.length; i++) {
  min = Math.min(min, calculateIndexesThroughMaps(newSeeds[i], maps))
}


console.log(min)
