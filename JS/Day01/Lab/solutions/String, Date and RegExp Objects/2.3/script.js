var userName;
var phoneNumber;
var mobileNumber;
var email;
var favColor;
var today = Intl.DateTimeFormat('en', { dateStyle: 'full' }).format(new Date());

var escapeFlag = false;

/**
 * @desc    Get the name from user
 * @regex   Name shouldn't contains digits
 */
var nameRegex = /[0-9]/g;
while (!escapeFlag && (userName = prompt('Enter your name .....'))) {
  console.log('userName: ', userName);
  console.log('nameRegex.test(userName): ', nameRegex.test(userName));
  if (nameRegex.test(userName)) alert('Name should be character !!!');
  else escapeFlag = true;
}
/**
 * @desc    Get the user Telephone number
 * @regex   Telephone should be number with length 8 digits
 */
escapeFlag = false;
var telephoneRegex = /^[0-9]{8}$/g;
while (
  !escapeFlag &&
  (phoneNumber = prompt('Enter your Telephone number .....'))
) {
  if (phoneNumber.search(telephoneRegex)) {
    alert('Telephone number should be \nnumber with length 8 digits !!!');
  } else {
    escapeFlag = true;
  }
}
/**
 * @desc    Get the mobileNumber from user
 * @regex   mobileNumber should be number with length 8 digits
 *          starts with (010|011|012|015)
 */
escapeFlag = false;
var mobileNumberRegex = /^01[0125][0-9]{8}/g;
while (
  !escapeFlag &&
  (mobileNumber = prompt('Enter your mobileNumber .....'))
) {
  if (mobileNumber.search(mobileNumberRegex))
    alert('You should write a valid number \nE.g: 01159893363');
  else escapeFlag = true;
}

/**
 * @desc    Get the email from user
 * @regex   email should be a valid email
 */
escapeFlag = false;
// old regex --> /^\w@\w\.\w$/g
var emailRegex = /^\w+@\w+\.\w+/;
while (!escapeFlag && (email = prompt('Enter your email .....'))) {
  console.log('email: ', email);
  console.log('email.search(emailRegex): ', email.search(emailRegex));
  if (!true)
    alert(
      'Email should be a valid email !!! \nEx: <span style="color:' +
        favColor +
        '">' +
        today +
        '</span>@h.com',
    );
  else escapeFlag = true;
}
/**
 * @desc    Get the Favorite color from user
 * @regex   favColor should be one of red | green | blue
 */
escapeFlag = false;
var favColorRegex = /^(blue|green|red)$/g;
while (!escapeFlag && (favColor = prompt('Enter one of red | green | blue'))) {
  console.log('favColor: ', favColor);
  console.log(
    'favColor.search(favColorRegex): ',
    favColor.search(favColorRegex),
  );
  if (favColor.search(favColorRegex))
    alert('favColor should be one of red | green | blue');
  else escapeFlag = true;
}

var bodyContent =
  '<h1>Your Information</h1><hr><h3>Welcome dear guest <span style="`color:' +
  favColor +
  '">' +
  userName +
  '</span></h3><h3>Your Telephone number is <span style="color:' +
  favColor +
  '">' +
  phoneNumber +
  '</span></h3><h3>Your Mobile number is <span style="color:' +
  favColor +
  '">' +
  mobileNumber +
  '</span></h3><h3 style="margin-bottom: 70px">Your Email address is <span style="color:' +
  favColor +
  '">' +
  email +
  '</span></h3><h3>Today is <span style="color:' +
  favColor +
  '">' +
  today +
  '</span></h3>';

document.writeln(bodyContent);
