var radius;
var escapeFlag = true;
while (
  escapeFlag &&
  (radius = prompt(
    'Enter the value of a circle’s radius in order to calculate its area',
  ))
) {
  if (isNaN(Number(radius))) alert('Please Enter a Number >> #️⃣');
  else {
    alert('Total Area of the circle = ' + Math.PI * Math.pow(radius, 2));

    escapeFlag = false;
  }
}

var square;
escapeFlag = true;
while (
  escapeFlag &&
  (square = prompt('Enter another value to calculate its square root'))
) {
  if (isNaN(Number(square))) alert('Please Enter a Number >> #️⃣');
  else {
    alert('The Square Root of ' + square + ' = ' + Math.sqrt(square));

    escapeFlag = false;
  }
}

var angle;
escapeFlag = true;
while (
  escapeFlag &&
  (angle = prompt('Enter an angle to calculate its cos value'))
) {
  if (isNaN(Number(square))) alert('Please Enter a Number >> #️⃣');
  else escapeFlag = false;
}

var bodyContent =
  '<h1>Cos ' +
  angle +
  '<sup>ْ</sup>' +
  ' is ' +
  Math.cos(angle) * (Math.PI / 180) +
  '</h1>';

document.writeln(bodyContent);
