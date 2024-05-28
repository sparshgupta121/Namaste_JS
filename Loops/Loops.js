//for of

const arr=[1,2,3,4,5,6]

for (const i of arr) {
    console.log(i);
    
} 

const strinmg="SPARSH"
for (const iterator of strinmg) {
    console.log(iterator);
}

//Mapss

const  map= new Map()
map.set('IN',"India")
map.set('FR',"France")

console.log(map);

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myObject = {
     'game1':'NFS',
     'game2':'spiderman'
} //can't apply loop directly on object

const coding = [ "js","ruby", 'java', "C++" , "python","Rust"]

coding.forEach( function (item){ console.log(item);} )

 coding.forEach((item)=>{console.log(item);})

const values = coding.forEach((item)=> { 
    console.log(item);
    return item;  //for each doesn't return any value undefined will be shown
    
} )

console.log(values);

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter((num)=> num>6)

console.log(newNums);

const nUmm = [1,2,3,4,5,6,7,8]

const ansss = nUmm.filter((itrm)=>{
   return itrm>4
})

console.log(ansss);

const AnsNumss = []
const Nomber = [1,2,3,4,5,6,7,8]

Nomber.forEach((item)=>{
    if(item<4){
        AnsNumss.push(item)
    }
})

console.log(AnsNumss);


const books = [ 

{title:"Book1" , Genre:"Fiction" , publish:2001 , edition: 14 },
{title:"Book2" , Genre:"science" , publish:2002 , edition: 18 },
{title:"Book3" , Genre:"history" , publish:2003 , edition: 10 },
{title:"Book4" , Genre:"novel" , publish:2004 , edition: 20 },
{title:"Book5" , Genre:"Fiction" , publish:2005 , edition: 11 },
{title:"Book6" , Genre:"comedy" , publish:2001 , edition: 22 },
{title:"Book7" , Genre:"poetry" , publish:2006 , edition: 16 },
{title:"Book8" , Genre:"science" , publish:2008 , edition: 14 },
{title:"Book9" , Genre:"Non-Fiction" , publish:2009 , edition: 9 },
{title:"Book10" , Genre:"Fiction" , publish:2007 , edition: 12 }


];

let UserBooks = books.filter((kitaab)=> kitaab.Genre==="science" && kitaab.publish>2005 )

console.log(UserBooks);

UserBooks=books.filter((kitaab)=>(kitaab.Genre==="Fiction" && kitaab.edition<15 && kitaab.publish>2002 ))

console.log(UserBooks);


