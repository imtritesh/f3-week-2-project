let userState = JSON.parse(localStorage.getItem('userState'));
let logoutBtn = document.getElementById('logout-btn');
let profileName = document.getElementById('profile-name');
let profileEmail = document.getElementById('profile-email');
let profilePassword = document.getElementById('profile-password');

console.log(userState);

if (userState) {
    profileName.innerText = (userState.username);
    profileEmail.innerText = (userState.email);
    profilePassword.innerText = (userState.password);
} else {
    window.location.href = '/index.html';
}

logoutBtn.addEventListener("click", () => {
    localStorage.clear();
    window.location.href='/index.html';
})