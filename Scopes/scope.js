// var c = 410

let c =620

if (true){

    let a= 10
    const b= 20
    let c=30
    
}


// console.log(a);
// console.log(b);
console.log(c); // 30 is getting printed

function one(){

    const username="sparsh"

    function two(){

        const website = "youtube"
        console.log(username);

}

// console.log(website); Out of Scope

two()

}

one()

 // =====================interesting exapmle =================================


 function addone(num){

    return num+1
  
 }

const ans= addone(5)
console.log(ans);

