  const promiseOne = new Promise(function (resolve,reject){

//Do an async task
//DB Calls,cryptography,network

setTimeout(function(){

console.log("Async task is completed");
resolve()

},1000)


  })

  promiseOne.then(function(){

    console.log("promise consumed");

  }
  
  
  )

new Promise(function(resolve,reject){

setTimeout(function(){


console.log("Async task 2");

resolve()

},2000)

}).then(function(){

    console.log("Asynch 2 Resolved");

})

const Promise3 = new Promise((resolve, reject) => {

    setTimeout(()=>{

        resolve({

            username:"Sparsh",
            email:"Sparsh@example.com"
        })
    },1000)

    
})

Promise3.then((user)=>{

console.log(user);


})

const promise4 = new Promise((resolve, reject) => {
    
setTimeout(()=>{

    let error=false
    if(!error){
        resolve({username:"Sparshhh Guptaaa",
            Password:1234
        })
    }
    else{

        reject("Error: Something went Wrong")

    }

},1000)

})

promise4.then((user)=>{

console.log(user);
return user.username


}).then((username)=>{


    console.log(username);

}).catch((error)=>{


console.log(error);

}).finally(()=>console.log("The Promise is either resolved or rejected"))

const Promise5 = new Promise((resolve, reject) => {

    setTimeout(()=>{

        let error=true
        if(!error){
            resolve({langauge:"JavaScript",
                Password:123
            })
        }
        else{
    
            reject("Error: JS went Wrong")
    
        }
    
    },1000)
    
})

async function consumePromisefive(){
try {

    
  const response =  await Promise5
  console.log(response);
  console.log("successssssss");
    
} catch (error) {

    console.log(error);
    
}
}

consumePromisefive()

async function getAllUser(){
 try{
const response = await fetch('https://api.github.com/users/Sparshgupta121')

const data= await response.json()

console.log(data);

}

catch(error){
    console.log("E: ",error);
}

}

getAllUser()

fetch('https://api.github.com/users/Sparshgupta121')
 .then((response)=>{

    return response.json()
    

 })
 .then((data)=>console.log(data))
 .catch((error)=>console.log(error))