
const txtFirstName = document.getElementById('firstname');
const txtLastName = document.getElementById('lastname');
const txtPassword = document.getElementById('password');
const txtConfirmPassword = document.getElementById('confirmpassword');
const txtAge = document.getElementById('age')
const txtEmailId = document.getElementById('emailid');
const txtSignup = document.getElementById('signup');

function onSignUp()
{
    
    const FirstName = txtFirstName.value;
    const LastName = txtLastName.value;
    const Password = txtPassword.value;
    const ConfirmPassword = txtConfirmPassword.value;
    const Age=txtAge.value;
    const EmailId = txtEmailId.value;
    const Signup = txtSignup.value;
    const users = [];

let errorMessage = '';

    if (FirstName.trim() === '') {
        errorMessage += 'first name should not empty\n\r';
    }

    if (LastName.trim() === '') {
        errorMessage += '\nlast name should not empty\n\r';
    }

    if (Password.trim() === '') {
        errorMessage += '\nPassword should not empty\n\r';
    }

    if (ConfirmPassword.trim() !== Password.trim()) {
        errorMessage += '\nPassword and Confirm Password should be Same\n\r';
    }

    if (EmailId.trim() === '') {
        errorMessage += '\nEmail-Id should not empty\n\r';
    }

    if (errorMessage !== '') {
        alert(errorMessage);
        return;
    }
    if (Password !== ConfirmPassword) {
        alert('password and confirm-password doesn\'t match');
        return;
}
const user = {
    firstName: FirstName,
    lastName: LastName,
    emailId: EmailId,
    password: Password
}
users.push(user);
console.log(users);
}
function onChangeFirstName(event) {
    const enteredKey = event.key;
    console.log(event.key);
 let pattern = /[a-zA-Z]/g;
    if (enteredKey.match(pattern) === null) {
        lblErrorFirstName.style.display = 'inline';

        if (txtFirstName.value.length < 2) {
            txtFirstName.value = '';
        }
        txtFirstName.value = txtFirstName.value.match(pattern).join('')
    }
    else {
lblErrorFirstName.style.display = 'none';
    }
}
txtFirstName.addEventListener('keyup', onChangeFirstName);

txtSignup.addEventListener('click', onSignUp);