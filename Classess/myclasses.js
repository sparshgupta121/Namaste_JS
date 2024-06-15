class User {
    constructor(username,password,email){


        this.username=username
        
        this.password=password
        this.email=email

    }

     encryptPassword() {

        return `${(this.password)}abc`
        
    }

    changeusername(){

        return `${this.username.toUpperCase()}`
    }


}

const User1 = new User("Sparsh",12345,"Sparsh@Abode.com")
console.log(User1.encryptPassword())
console.log(User1.changeusername())


// behind the Scene 

function user(username,password,email){

    this.username=username
        
        this.password=password
        this.email=email


}

user.prototype.EncryptPassword = function(){

    return `${(this.password)}abc`


}

user.prototype.ChangeUsername = function(){

    return `${this.username.toUpperCase()}`


}

const userNew = new user("Dhananjay",12141,"DJ@ji.com")

console.log(userNew.ChangeUsername());
console.log(userNew.EncryptPassword());