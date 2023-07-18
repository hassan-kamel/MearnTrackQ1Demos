var messageFromUser = prompt('Enter a Palindrome Word');
var isCaseSensitive = confirm('Do you want Consider Case sensitive ?');
console.log('isCaseSensitive: ', isCaseSensitive);

var CharsOfMessageArray = messageFromUser.split('');

var reverseCounter = CharsOfMessageArray.length - 1;
var regularCounter = 0;

var isAPalindrome = true;

while (regularCounter < reverseCounter && isAPalindrome) {
  if (isCaseSensitive)
    CharsOfMessageArray[regularCounter] !== CharsOfMessageArray[reverseCounter]
      ? (isAPalindrome = false)
      : '';
  else {
    CharsOfMessageArray[regularCounter].toLowerCase() !==
    CharsOfMessageArray[reverseCounter].toLowerCase()
      ? (isAPalindrome = false)
      : '';
  }
  // switch (isCaseSensitive) {
  //   case true:
  //     var firstChar = CharsOfMessageArray[regularCounter];
  //     var lastChar = CharsOfMessageArray[reverseCounter];
  //     break;

  //   case false:
  //     var firstChar = CharsOfMessageArray[regularCounter].toLowerCase();
  //     var lastChar = CharsOfMessageArray[reverseCounter].toLowerCase();
  //     break;

  //   default:
  //     break;
  // }

  // if (firstChar !== lastChar) isAPalindrome = false;

  reverseCounter--;
  regularCounter++;
}
console.log({ isAPalindrome, regularCounter, reverseCounter });

document.writeln(
  '<h2>The Message you entered is: ' +
    (isAPalindrome ? 'Palindrome' : 'not a Palindrome') +
    '</h2>',
);
