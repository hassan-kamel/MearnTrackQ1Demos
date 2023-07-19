var number;
var sum = 0;

while (
  sum <= 100 &&
  (number = prompt('enter number')) &&
  Number(number) !== 0
) {
  if (isNaN(Number(number))) alert('Please Enter a valid Number');
  else sum += Number(number);
}

document.writeln('<h2>Sum is: ' + sum + '</h2>');
