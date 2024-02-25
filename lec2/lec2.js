//learning about objects 

let apple={
    colour:"red",
    state:"himacahl",
    taste:"sweet",

    eat: function() {
        console.log("eating apple");
 
    }

};

function fruits(col,st){


    let apple={
        colour:col,
        state: st,
        taste:"sweet",
    
        eat: function() {
            console.log("eating apple");
    
        }
    }
    return apple;



}

let apple1=fruits("red","kasmir");
apple1.eat(); 

function Rectangle(len,bre){

    this.length=len;
    this.breadth=bre;
    this.draw= function() {
        console.log("Drawiingg");
    }

}

let rectangleObj= new Rectangle(4,6);

rectangleObj.colour="yellow";
delete rectangleObj.length;

let a={value:12};
let b=a;

a.value++;

console.log(a.value);
console.log(b.value);

for(let key of Object.entries(apple1)){

    console.log(key)

}

if ("15taste" in apple1){
    console.log("Present")
}
else{
    console.log("Absent")
}

//object cloning
//iteration for key in src; dest[key]=src[key] 
// assignment=Object.assign({},src)
//spread obj=={...src}


