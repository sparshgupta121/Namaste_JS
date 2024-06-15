class user{

    constructor(username){
        this.username=username


    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }


   static createID(){
        return `123`
    }

}

const MYUSER = new user("Sparsh")
console.log(MYUSER);
// console.log(MYUSER.createID())

class Teacher extends user{
    constructor(username,email ){
super(username)
this.email=email
    }
}

const iphone = new Teacher("iphone","iphone@apple.com")

iphone.logMe()