var input = document.getElementById('mySign');
var signsBg = document.querySelectorAll('.sign .color');
var signsTxt = document.querySelectorAll('.sign .txt');

function execute() {
  for (var i = 0; i < 3; i++) {
    signsBg[i].classList.remove('bg');
    signsTxt[i].classList.remove('sign-text');
  }
  if (Number(input.value) === 1) {
    signsBg[0].classList.add('bg');
    signsTxt[0].classList.add('sign-text');
  } else if (Number(input.value) === 2) {
    signsBg[1].classList.add('bg');
    signsTxt[1].classList.add('sign-text');
  } else if (Number(input.value) === 3) {
    signsBg[2].classList.add('bg');
    signsTxt[2].classList.add('sign-text');
  }
}
var index = 1;
setInterval(function () {
  input.value = index % 4;
  execute();
  index++;
}, 500);
