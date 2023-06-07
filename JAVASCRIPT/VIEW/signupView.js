import * as User from '../MODELS/User'

/* let modalSignUp = document.getElementById('modalSignUp') */
let clickSignUp = document.getElementById('confirmarSignUp')
let email = document.getElementById('emailSU').value
let name = document.getElementById('name').value
let password1 = document.getElementById('password1').value
let password2 = document.getElementById('password2').value


clickSignUp.addEventListener('click',() => {
    User.signUp(email, name, password1, password2)
    setTimeout(() => {window.location.href = "./Home.html"},2000)
})