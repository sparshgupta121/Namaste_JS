class user{
    constructor(username){

        this.username=username

    }

        logMe(){
            console.log(`Username Is ${this.username}`);
        }


}

class Teacher extends user {

    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){

        console.log(`a new course was added by ${this.username}`);
    }


}

const Userzzz = new Teacher("Sparsh","sparshshh@youtube.com",123456)

Userzzz.addcourse()

