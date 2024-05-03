// Constructor and literals 

//constructor creates singleton object  Object.create

const mySmbol= Symbol("key1")

const JsUser = {

    name:"Sparsh",
    "Full name":"Sparsh Gupta",
    [mySmbol]:"1322e",
    Age:20,
    Interests:"Softwares",
    email:"Sparsh@gmail.com",
    isLoggedIn:false,

}

console.log(JsUser.email);
console.log(JsUser["email"]);

console.log(JsUser["Full name"]);

console.log(typeof mySmbol);
JsUser.email="Sparsh@LinkedIn.com";

// Object.freeze(JsUser)
JsUser.email="Sparsh@google.com";

console.log(JsUser);

JsUser.greetings= function () {
    console.log("Hello Js Users");
    
}

console.log(JsUser.greetings);

JsUser.greetings22= function () {
    console.log(`Hello Js User ${this.name}`);
    
}

console.log(JsUser.greetings());

console.log(JsUser.greetings22());

