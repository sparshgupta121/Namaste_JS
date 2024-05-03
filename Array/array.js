const myArr=[0,1,4,2,3,5,8,5]
console.log(myArr[0]);

const myHeros = new Array("Shaktiman" , "Naagraj", "Chota Bheem")

console.log(myHeros.push(6));
//push add element at last index
console.log(myHeros);

myHeros.unshift(9)
//unshift add element at index 0
//shift delete element at index 0

console.log(myHeros);

console.log(myArr.indexOf(4));

const newarrr = myArr.join()
//join will convert the array to string 
console.log(myArr);
console.log(newarrr);
console.log(typeof(newarrr));

//Array lec 2

const marvelHeros = ["thor","Ironman","spiderman"]
const dcHeros= ["superman","baatman","Flash"]

// marvelHeros.push(dcHeros);

/* Push Modifies the existing array while concatinate returns a new array which we have to store in a new varriable, concat doesn't modify the existing array */

console.log(marvelHeros);

const allheross= marvelHeros.concat(dcHeros)

console.log(allheross);

//easy method to  joinn use spread methods

const all_neww_herossss= [...dcHeros,...marvelHeros]

console.log(all_neww_herossss);


//flat is used to take array into array into array to a single array.

console.log( Array.isArray("Sparsh") );
console.log(Array.from("Sparsh"));

console.log(Array.from({name:"Sparsh"})); //Will create an empty array because not defined that what to use for creating array ie..key or value?   //can be asked in interviews //later on we can create array using key or values when we create projects  

let score1= 100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));


