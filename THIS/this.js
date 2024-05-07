const user= {

    username:"Sparsh",
    price:"1299",

    welcomeMessage: function(){

        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }

}

user.welcomeMessage();
user.username="Sammm";
user.welcomeMessage();

// console.log(this); empty object

function heyFN(){
    let username="hitesh"
    console.log(username);
    console.log(this);

}

heyFN();


const arrowFunction = () => {


  const name = "Sparsh"
  console.log(name);
    console.log(this);


}


arrowFunction();

const addtwo =  (num1,num2) => {

    return (num1+num2)

 }

console.log(addtwo(5,8));

const addthree =  (num1,num2,num3) =>(num1+num2+num3) //used in react
console.log(addthree(4,1,7));


