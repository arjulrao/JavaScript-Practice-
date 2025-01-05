// What's the result of OR?
// What is the code below going to output?
console.log( null || 2 || undefined)   //2

// Write the if condition to check that age is between 14 and 90 inclusively.

let age = 15;
if(age >14 && age <90){
    console.log(age);
}

age = 10;
// Not !
if( !(age >14 && age < 90)){
    console.log(age)
}
if (age < 14 || age > 90){
    console.log(age);
}


// Check login
let login

if( login == "Admin" ){
    let password = "TheMaster";
    if(password == "TheMaster"){
        console.log('Welcome');
    } else if( password == null || undefined){
        console.log("Canceled");
    } else {
        console.log("Wrong Password");
    }
} else if ( login == null || undefined){
    console.log("Canceled");
} else {
    console.log( "I don't know you.")
}