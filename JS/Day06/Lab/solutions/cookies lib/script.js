if (getCookie('visited')) window.open('./home.html', '_self');
else {
  var username = document.getElementById('username');
  var age = document.getElementById('age');
  var male = document.getElementById('male');
  var female = document.getElementById('female');
  var color = document.getElementById('color');
  var error = document.querySelector('.error-message');

  function register() {
    if (
      !(
        username.value &&
        age.value &&
        color.value &&
        (female.checked || male.checked)
      )
    ) {
      error.style.display = 'block';
    } else {
      setCookie('username', username.value, 1);
      setCookie('age', age.value, 1);
      setCookie('color', color.value, 1);
      setCookie('gender', male.checked, 1);
      setCookie('visited', 0, 1);
      window.open('./home.html', '_self');
    }
  }
}
