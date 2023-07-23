var string = 'he quick brown fox';

function capitalize(str) {
  var returnString = '';
  for (var i = 0; i < str.length; i++)
    if (i === 0 || str[i - 1] == ' ') returnString += str[i].toUpperCase();
    else returnString += str[i];

  return returnString;
}

console.log(capitalize(string));
