let Users = JSON.parse(localStorage.users);

export default class User {
    id = 0
    name = ''
    email = ''
    password = ''
    inventory = []
    admin = true
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
        return logInUser
    } else if (email != this.email) {
        throw Error('Invalid email')
    } else if (password != this.password) {
        throw Error('Invalid password')
    }

    //Admin
    let logInAdmin = Users.find(user => user.email == email && user.password == password && user.admin == true)
    if (logInAdmin != undefined) {
        localStorage.setItem('loggedUser', JSON.stringify(logInUser))
        return logInAdmin
    } else if (email != this.email) {
        throw Error('Invalid email')
    } else if (password != this.password) {
        throw Error('Invalid password')
    }
}

export function signUp(name, email, password1 , password2) {
    let newEmail = Users.find(user => user.email)
    if (newEmail in Users) {
        throw Error('This email already exists!')
    }
}