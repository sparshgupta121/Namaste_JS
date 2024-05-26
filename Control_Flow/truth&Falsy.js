const userEmail = "sparsh@gmail.com"
//Assumed that if string is there it is true if blank string it is false

if (userEmail) {
    console.log("Got user Email");
}
else{
    console.log("Don't have user Email");
}

/******************* Truthy & Falsy Values *********************

false , 0 , -0 , BigInt 0n , "" , null, undefined, NaN

Rest all are truthy Values  

Truthy Values "0","false", " ", [] , {} , function( ) { } , 

*/

const Arr = []

if (Arr.length===0) {
    console.log("Array is Empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length==0){
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??) : null , undefiined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10 // 10 will be Assigned
val1 = undefined ?? 15  // 15 will be assigned 


val1 = null ?? 10 ?? 20  // first defined value will be assigned

console.log(val1);

// Terniary Operator
// condition ? true : false

const Price = 100
Price <= 80 ? console.log("less than 80"):console.log("More than 80");;










