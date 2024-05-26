 // if

 if (2==="2") {
    console.log("equal");
 }
 else
    console.log("not equal");

/*  

comparision operators     
    <,>,<=,>=,==,!=,===


*/ 

const bal=1000
if (bal>500) {
    console.log("Test");
} 

const userLoggedIn=true
const DebitCard=true
const loggedInFromEmail=false
const LoggedInFromGoogle=true

if (userLoggedIn&&DebitCard) {
    console.log("Process the transaction");
}

if(loggedInFromEmail||LoggedInFromGoogle){

    console.log("Allowed Login");
}

