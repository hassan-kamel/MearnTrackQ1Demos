var sentence = prompt('Enter a sentence ..... ');
var letter = prompt('Enter a letter .....');

var letterPositions = [];
var bodyContentSentence = '';
bodyContentSentence += '<h1>';
for (var i = 0; i < sentence.length; i++) {
  if (sentence[i] === letter) {
    letterPositions.push(i);
    bodyContentSentence += '<span>' + sentence[i] + '</span>';
  } else bodyContentSentence += sentence[i];
}
bodyContentSentence += '</h1>';

var bodyContent =
  bodyContentSentence + '<h2>Letter Locations: [' + letterPositions + ']</h2>';
document.writeln(bodyContent);
