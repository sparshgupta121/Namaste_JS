//

let myDate = new Date()


console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


let wemyDate = new Date(2023, 0, 23, 5, 3)
console.log(wemyDate.toLocaleString());

let memyDate = new Date("2024-05-14")
console.log(memyDate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp/1000);

console.log(memyDate.toLocaleString('default',{

weekday:"long",
}));








