const myNum = [1,2,3,4,5,6,7,8,9,10]

const NewAns = myNum.map((num)=>num+10)
console.log(NewAns);

const Ansss = myNum
                .map((num)=>(num*10))
                .map((item)=>(item+1))

console.log(Ansss);


const nomber = [1,2,3,4]
const initval=0

const total = nomber.reduce((acc,currval)=>acc+currval,initval)
console.log(total);






