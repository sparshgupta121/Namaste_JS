/*  In Js all the things are executed in 2 parts 

1. Execution Context  - Global execution context , Function or functional execution context, EVAL exc. Context

2. Call Stack   


phase 1 : Global Execution (this)

phase2 : Memory Creation (Creation Phase)

phase 3: Execution

1. Global execution ---->> (this)
2. Creation phase

let val1 = 10 
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}

let result1=addnum(val1,val2)
let result2=addnum(5,4)


*/ 

/* Memory Phase
val1 1----> undefined
val2------>undefined
addnum ----> defination
result1 ------>undefined
result2 -------->undefined

*************************  exexution phase **********************


val1 <------10
val2 <------5
addnum <------   _______________
                |               |
                |  New Varible  |
                |       env.    |
                |       +       |
                |   Execution   |
                |       Thread  |
                |_______________|

*/


