function Sparsh(){

console.log("Hii");
console.log("Js");
console.log("Learners");

}

Sparsh()

function sum(a,b){

return(a+b);

}

const result = sum(4,5)

console.log("Result" , result);

function loginUserMEssage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    
    return `${username} just logged in`

}

console.log(loginUserMEssage("sparsh"));
 
function  price(...num1){

    let totalPrice =0

    for (let index = 0; index < num1.length; index++) {
        totalPrice += num1[index];
        
    }

    return totalPrice


}

const value = price(200,400,520,800,380)
console.log(value);


function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and cost is ${anyobject.cost}`);

}

handleObject({

    username:"Sparsh",
    cost:963.12

})

