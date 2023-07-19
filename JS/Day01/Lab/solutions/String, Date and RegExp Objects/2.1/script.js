var messageFromUser = prompt('enter a message');

var NumbersOfEs = 0;
for (var i = 0; i < messageFromUser.length; i++)
  if (messageFromUser[i].toLowerCase() === 'e') NumbersOfEs++;

document.writeln("<h2> Numbers Of E's: " + NumbersOfEs + '</h2>');
