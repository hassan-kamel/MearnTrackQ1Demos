var imgs = document.getElementsByTagName('img');
var div = document.getElementsByTagName('div')[0];
console.log('imgs: ', imgs);

var i = 0;

var interval = setInterval(() => {
  imgs[i % imgs.length].setAttribute('src', 'images/marble2.jpg');
  i !== 0 &&
    imgs[(i - 1) % imgs.length].setAttribute('src', 'images/marble1.jpg');
  i++;
}, 300);

div.addEventListener('mouseenter', function () {
  imgs[(i - 1) % imgs.length].setAttribute('src', 'images/marble3.jpg');

  clearInterval(interval);
});
div.addEventListener('mouseleave', function () {
  interval = setInterval(() => {
    imgs[i % imgs.length].setAttribute('src', 'images/marble2.jpg');
    i !== 0 &&
      imgs[(i - 1) % imgs.length].setAttribute('src', 'images/marble1.jpg');
    i++;
  }, 300);
});
