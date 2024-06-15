function multplyby5(num) {
    return num*5
}

multplyby5.power =2

console.log(multplyby5(10));
console.log(multplyby5.power);
console.log(multplyby5.prototype);

function createUser (username,score) {


    this.username = username
    this.score=score


    
}

createUser.prototype.increment = function(){

    this.score++

}

createUser.prototype.printme=function(){


    console.log(`score is ${this.score}`);
}

const one = new createUser("Sparsh", 25)
const two= new createUser('Heyy',16)

one.printme()







