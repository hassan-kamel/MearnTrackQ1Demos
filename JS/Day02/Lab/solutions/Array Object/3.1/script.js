var elements = [];
var numOfElements = 3;

var temp;
while (
  elements.length < numOfElements &&
  (temp = prompt('Enter A Number #️⃣....'))
) {
  if (!isNaN(Number(temp))) elements.push(Number(temp));
  else alert('Please Enter A Number #️⃣');
}

function operator(operation, operands) {
  var result;
  var fullOperation = '';
  if (operation === '+') {
    result = 0;
    for (var index = 0; index < numOfElements; index++) {
      result += operands[index];
      fullOperation += index === 0 ? operands[index] : '+' + operands[index];
    }
  } else if (operation === '*') {
    result = 1;
    for (var index = 0; index < numOfElements; index++) {
      result *= operands[index];
      fullOperation += index === 0 ? operands[index] : '*' + operands[index];
    }
  } else if (operation === '/') {
    result = operands[0];
    fullOperation += operands[0];
    for (var index = 1; index < numOfElements; index++) {
      result /= operands[index];
      fullOperation += '/' + operands[index];
    }
  }

  return { result, fullOperation };
}

var adding = operator('+', elements);
var multiplying = operator('*', elements);
var dividing = operator('/', elements);

var bodyContent =
  '<h1>Adding -- Multiplying -- Dividing 3 values</h1><hr><h3 style="color: brown">sum of the 3 values <span style="color: black;">' +
  adding.fullOperation +
  '=' +
  adding.result +
  '</span></h3><h3 style="color: brown">Multiplication of the 3 values <span style="color: black;">' +
  multiplying.fullOperation +
  '=' +
  multiplying.result +
  '</span></h3><h3 style="color: brown">Division of the 3 values <span style="color: black;">' +
  dividing.fullOperation +
  '=' +
  dividing.result +
  '</span></h3>';

document.writeln(bodyContent);
