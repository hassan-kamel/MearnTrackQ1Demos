var inputs = document.getElementsByTagName('input');
var result = document.querySelector('.result');
var error = document.querySelector('.error');

var userData = [];
function execute() {
  var errorFlag = false;
  var valuesObj = {};
  for (var i = 0; i < 2; i++) {
    if (i === 0) {
      valuesObj.name = inputs[i].value;
      if (inputs[i].value.length <= 3) errorFlag = true;
    } else if (i === 1) {
      valuesObj.age = inputs[i].value;
      if (Number(inputs[i].value) <= 18) errorFlag = true;
    }
  }

  if (!errorFlag) {
    valuesObj.id = userData.length + 1;
    userData.push(valuesObj);
    showUsers();
  } else {
    error.classList.remove('hidden');
  }
}

function showUsers() {
  var inned = '';
  for (var i = 0; i < userData.length; i++) {
    inned +=
      '<tr><td>' +
      userData[i].id +
      '</td><td>' +
      userData[i].name +
      '</td><td>' +
      userData[i].age +
      '</td></tr>';
  }

  console.log('inned: ', inned);
  result.innerHTML = inned;
}
