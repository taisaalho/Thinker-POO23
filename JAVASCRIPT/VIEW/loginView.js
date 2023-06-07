import * as User from '../MODELS/User';

let clickLogIn = document.getElementById('confirmarLogIn')
let email = document.getElementById('emailLI')
let password = document.getElementById('password');

clickLogIn.addEventListener('click', () => {
    User.logIn(email, password)
    setTimeout(() => {window.location.href = "./Home.html"},2000)
})