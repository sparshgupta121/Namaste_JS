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





