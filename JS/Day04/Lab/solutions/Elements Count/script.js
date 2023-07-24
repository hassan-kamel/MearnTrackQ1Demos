var inputs = document.getElementsByTagName('input');
var result = document.querySelector('.result');
var valuesObj = {};

function execute() {
  for (var i = 0; i < 4; i++) {
    if (i === 0)
      valuesObj.Tag = document.getElementsByTagName(inputs[i].value).length;
    else if (i === 1)
      valuesObj.Class = document.getElementsByClassName(inputs[i].value).length;
    else if (i === 2)
      valuesObj.ID = document.getElementById(inputs[i].value) ? true : false;
    else if (i === 3)
      valuesObj.Name = document.getElementsByName(inputs[i].value).length;
  }

  result.innerHTML = JSON.stringify(valuesObj);
}
