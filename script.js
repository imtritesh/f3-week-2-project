let signupForm = document.querySelector('#signup-form');
let signupMessage = document.getElementById('signup-message');
let name = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let cnfPassword = document.getElementById('cnfPassword');
let successMessage = document.getElementById('signup-message');

signupForm.addEventListener('submit', () => {
    
    if (name.value == "" || email.value == "" || password.value == "" || cnfPassword.value == "") {
        event.preventDefault();
        signupMessage.innerHTML = '<p class="error">Error: All fields are mandatory.</p>';
    }
    else if (password.value !== cnfPassword.value) {
        event.preventDefault();
        signupMessage.innerHTML = '<p class="error">Password must be same.</p>';
    } else {
        signupMessage.innerHTML = '<p class="success">Successfully Signed up!</p>'
        let accessToken = generateAccessToken();
    let userState = {
        username: name.value,
        email: email.value,
        password: password.value,
        cnfPassword: cnfPassword.value,
        accessToken
    };
    localStorage.setItem('userState', JSON.stringify(userState));
    }
});

function generateAccessToken() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
};




