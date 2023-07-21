var number;

while ((number = prompt('Enter A Number .....'))) {
  number = Number(number);
  if (isNaN(number)) alert('Please Enter A Valid Number ‼');
  else {
    if (number % 3 === 0 && number % 5 === 0 && number) alert('FIZZ-BUZZ');
    else if (number % 3 == 0 && number) alert('FIZZ');
    else if (number % 5 == 0 && number) alert('BUZZ');
    else alert('NONE');
  }
}
