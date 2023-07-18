var messageFromUser = prompt('enter a message');

var NumbersOfEs = 0;
messageFromUser.split('').forEach(function (char) {
  if (char.toLowerCase() === 'e') NumbersOfEs++;
});

document.writeln('<h2> NumbersOfEs: ' + NumbersOfEs + '</h2>');
