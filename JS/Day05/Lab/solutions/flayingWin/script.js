var interval2;
var win;
function execute() {
  win = window.open('./typing.html', '', 'width=200,height=200');
  var x = 0;
  var y = 0;
  var flag = false;
  interval2 = setInterval(function () {
    console.log({ x, y });
    if (flag) {
      win.moveBy(-1, -1);
      x -= 1;
      y -= 1;
      if (x < 0) {
        flag = false;
      }
    } else {
      win.moveBy(1, 1);
      x += 1;
      y += 1;
      if (x > 500) {
        flag = true;
      }
    }
  }, 5);
}

function closeWindow() {
  console.log('h');
  win && win.close();
  clearInterval(interval2);
}
