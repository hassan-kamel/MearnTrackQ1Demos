var elements = [];
var numOfElements = 5;

var temp;
while (
  elements.length < numOfElements &&
  (temp = prompt('Enter A Number #️⃣....'))
) {
  if (!isNaN(Number(temp))) elements.push(Number(temp));
  else alert('Please Enter A Number #️⃣');
}

const enteredElements = new Array(...elements);
const sortedDesc = new Array(...elements.sort((a, b) => b - a));
const sortedAsc = new Array(...elements.sort((a, b) => a - b));
console.log('enteredElements: ', enteredElements);
console.log('sortedDesc: ', sortedDesc);
console.log('sortedAsc: ', sortedAsc);

var bodyContent =
  '<h1>Sorting</h1><hr><h3 style="color: brown">You\'ve entered values of  <span style="color: black;">' +
  enteredElements +
  '</span></h3><h3 style="color: brown">Your values after sorted descending <span style="color: black;">' +
  sortedDesc +
  '</span></h3><h3 style="color: brown">Your values after sorted ascending <span style="color: black;">' +
  sortedAsc +
  '</span></h3>';

document.writeln(bodyContent);

// Still in progress
