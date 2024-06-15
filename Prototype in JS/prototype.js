let myName = "Sparsh"

// console.log(myName.truelength);

let myheros = ["thor","spiderman"]

let heroPower = {


    thor:"hammer",
    spiderman:"sling",

    getspiderpower: function(){

        console.log(`spidy power is ${this.spiderman}`);

    }

}

Array.prototype.SaySparsh=function(){

console.log('hey this is sparsh');

}

Object.prototype.sparsh=function(){
    console.log("Sparsh is present in all object");
}

heroPower.sparsh()
myheros.sparsh()
// heroPower.SaySparsh() // object so don't have access to array prototype 
myheros.SaySparsh()// yes can acess array prototype


const user={

    username:"sparsh",
    email:"sparsh@google.com"
}


const Teacher={
    makeVideo:true
}

const TeachingSupport = {

isAvailable: false

}
const TASupport = {


    makeAssignment: "JS Assignment",
    fulltime:true,


    __proto__:TeachingSupport
}

Teacher.__proto__=user
 

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let AnotherUserNAME= "             SPARSH          "


String.prototype.truelength=function(){
console.log(`true lenth is ${this.trim().length}`);


}

AnotherUserNAME.truelength()

console.log("NHEYA".truelength());
console.log("            vmmbvmbmvbmvmbm ".truelength());



