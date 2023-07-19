var array = ['Hassan', 'Mohamed', 'Kamel', 'Saad'];

function getRandomIndex() {
  return Math.floor(Math.random() * array.length);
}

var randomIndexGenerated = [getRandomIndex()];

var temp;

while ((temp = getRandomIndex()) !== null && randomIndexGenerated.length < 2) {
  temp === randomIndexGenerated[0] || randomIndexGenerated.push(temp);
}

console.log('randomIndexGenerated: ', randomIndexGenerated);

document.writeln(
  '<h1>' +
    array[randomIndexGenerated[0]] +
    ' ' +
    array[randomIndexGenerated[1]] +
    '</h2>',
);
