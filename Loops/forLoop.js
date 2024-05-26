// For Loop

for (let i = 1; i <= 10; i++) {
    if (i==5) {
        console.log("Number is 5");
    }
    console.log(i);
}

//nested loop

for (let index = 0; index <= 10; index++) {
    console.log(`Outer loop value: ${index}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner Loop Value is ${j} and outer loop is: ${index} `);
        
    }
    
}

// break and continue

for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("Detected 5");
        continue;

    }
    console.log(`Value of i is ${index}`);
    
}

// while loop







