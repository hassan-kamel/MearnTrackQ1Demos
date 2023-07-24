var inputs = document.getElementsByTagName('input');
var result = document.querySelector('.result');
var valuesObj = {};

function execute() {
  var element;
  for (var i = 0; i < 3; i++) {
    if (i === 0) element = document.createElement(inputs[i].value);
    else if (i === 1) element.style.backgroundColor = inputs[i].value;
    else if (i === 2) element.innerHTML = inputs[i].value;
  }

  result.innerHTML = '';
  result.appendChild(element);
}
