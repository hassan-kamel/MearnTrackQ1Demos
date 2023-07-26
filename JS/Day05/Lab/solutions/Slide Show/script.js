var img = document.getElementsByTagName('img')[0];
var imgNum = 1;

function prev() {
  imgNum === 1 ? (imgNum = 6) : (imgNum -= 1);
  setImg();
}
function next() {
  imgNum === 6 ? (imgNum = 1) : (imgNum += 1);
  setImg();
}

function setImg() {
  img.setAttribute('src', 'Images/' + imgNum + '.jpg');
}

var interval;
function play() {
  interval = setInterval(function () {
    next();
  }, 300);
}

function stop() {
  clearInterval(interval);
}
