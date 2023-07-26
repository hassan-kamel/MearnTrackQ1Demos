var form = document.getElementsByTagName('form')[0];
var rows = document.querySelectorAll('.input-row');
var errorName = document.getElementById('error-name');
var errorEmail = document.getElementById('error-email');
var errorPassword = document.getElementById('error-password');
function submitForm(e) {
  errorName.classList.remove('show-error');
  errorEmail.classList.remove('show-error');
  errorPassword.classList.remove('show-error');
  document.getElementById('success-message').style.display = 'none';
  e.preventDefault();
  var formData = new FormData(form);

  var formValues = {
    name: formData.get('name'),
    email: formData.get('email'),
    country: formData.get('country'),
    password: formData.get('password'),
    gender: formData.get('gender'),
    sports: formData.get('sport'),
  };

  if (formValues.name.length <= 3) errorName.classList.add('show-error');
  if (formValues.email.search(/^\w+@\w+\.\w+/))
    errorEmail.classList.add('show-error');
  if (
    formValues.password.search(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    )
  )
    errorPassword.classList.add('show-error');

  document.querySelectorAll('.show-error').length === 0
    ? (document.getElementById('success-message').style.display = 'block')
    : '';
}

function watchChange() {}
