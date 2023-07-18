var number;
var sum = 0;
while ((number = prompt('enter number')) && Number(number)) {
  sum += Number(number);
}

document.writeln('<h2>Number: ' + sum + '</h2>');
