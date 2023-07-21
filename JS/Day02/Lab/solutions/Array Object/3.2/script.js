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

var bodyContent =
  '<h1>Sorting</h1><hr><h3 style="color: brown">You\'ve entered values of  <span style="color: black;">' +
  elements +
  '</span></h3><h3 style="color: brown">Your values after sorted descending <span style="color: black;">' +
  elements.sort(function (a, b) {
    return b - a;
  }) +
  '</span></h3><h3 style="color: brown">Your values after sorted ascending <span style="color: black;">' +
  elements.sort(function (a, b) {
    return a - b;
  }) +
  '</span></h3>';

document.writeln(bodyContent);
