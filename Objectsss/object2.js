//object using constructor

const instaUser = new Object() //singleton
const heyUser = {} //non Singleton user

instaUser.id= 12345
instaUser.name="Sparsh"
instaUser.isLoggedIn=false



console.log(instaUser);

const regularUser = {
    email:"Sparsh@gmail.com",
    fullname:{ 
        Username:{
            firstname:"sparsh",
            lastname:"gupta"
        }

    }
}

console.log(regularUser.fullname);

const obj1 = {1:'a', 2 :"adfz"}
const obj2 = {2:"AD",5:'fazsc'}

const obj3 = Object.assign({},obj1,obj2)
// const onj33={obj1,obj2}

const objj333 = {...obj1,...obj2}

console.log(obj3);
console.log(objj333); 

const Arrayobj = [

    {
        name:"Sparsh",
        contact:"9638527410"
    },
    
    {
        name:"Sparsh",
        contact:"9638527410"
    },
    
    {
        name:"Sparsh",
        contact:"9638527410"
    },
    
    {
        name:"Sparsh",
        contact:"9638527410"
    },


    
    {
        name:"Sparsh",
        contact:"9638527410"
    },
    
    {
        name:"Sparsh",
        contact:"9638527410"
    },
    
    {
        name:"Sparsh",
        contact:"9638527410"
    },
    
    {
        name:"Sparsh",
        contact:"9638527410"
    }

]

console.log(Arrayobj[1].contact);

console.log(instaUser);
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));

 










