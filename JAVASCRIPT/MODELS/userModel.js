let Users = JSON.parse(localStorage.users);

export default class User {
    id = 0
    name = ''
    email = ''
    password = ''
    inventory = []
    admin = false
    escapeFinish = false
    badges = []
    level = []
    bestTime = 0
    img = ''

    constructor(name,email,password,admin = false) {
        this.id = Users.length == 0 ? 1 : Users[Users.length - 1].id + 1
        this.name = name
        this.email = email
        this.password = password
        this.admin = admin
    }
}

export function logIn(email, password) {

    //Normal User
    let logInUser = Users.find(user => user.email == email && user.password == password)
    if (logInUser != undefined) {
        localStorage.setItem('loggedUser', JSON.stringify(logInUser))
        window.location.href="/Profile.html"
        return logInUser
    } else if (email != this.email) {
        throw Error('Email inválido.')
    } else if (password != this.password) {
        throw Error('Palavras-passe inválida')
    }

    //Admin
    let logInAdmin = Users.find(user => user.email == email && user.password == password && user.admin == true)
    if (logInAdmin != undefined) {
        localStorage.setItem('loggedUser', JSON.stringify(logInUser))
        window.location.href="/Admin.html"
        return logInAdmin
    } else if (email != this.email) {
        throw Error('Email inválido.')
    } else if (password != this.password) {
        throw Error('Palavras-passe inválida.')
    }
}

export function signUp(name, email, password1 , password2) {
    let newEmail = Users.find(user => user.email == email)

    if((password1 == password2) && (newEmail == undefined)) {
        if(validateEmail(email) == true) {
            usersData.push(new User(name, password1, email))
            console.log(Users)
            localStorage.setItem('users', JSON.stringify(Users))
            return 
        } else {
            throw Error('Invalid Email Address')
        }
    } else {
        throw Error('Something went wrong, try again.')
    }
}