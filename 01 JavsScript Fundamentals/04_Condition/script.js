/* If  */
/* Syntax --> if(condition){code} */
// It condition give the boolean value - true, false
//If condition is true --> code execute
//If condition is false --> code is not execute
// Falsy value -> 0, "", null, undefined, NaN, false. They gives the false as output. That's means code is not execute.
// Truthy value -> Other value are truthy value as -> 1, 2, "Hello", ect...

// First
if(true){
    console.log("Hello I am true");
}
// Second
if(false){
    console.log("I am false");
}
// First is execute but second is not execute
/* if(" ", hello, 1, any true value){ code is execute} */
/* if("", 0, NaN, any false value){ code is not execute} */
let year = 2015;
let con = (year == 2015);
if(con){
    console.log("Output depands on con");
}
// We can add the else clause --> That's means it is the one type of default code the condition. Means if condition is false that code is execute.
let condition = 15;
if(condition == 13){
    console.log("Condition is match");
}else{
    console.log("Condition is not match! That is else clause");
}

// Also we can write the multipal condition
// Hare we use else if -->

let condition_2 = 1;

if(condition_2 == 2){
    console.log("Code line first execute");
}else if(condition_2 == 3){
    console.log("Code line second execute");
}else if(condition_2 == 1){
    console.log("Code line third execute");
}else{
    console.log("No code code line is match");
}
// Which one condition is true that code is execute. If no one condition is true else clause is execute


/* Conditional operator '?' */
// It is also just like if else
// Syntax --> condition ? value1 : value2
// If condition is true is execute first value.
// If condition is false second value execute.

// Using if else
let accessAllowed;
let age = 18;
if(age >= 18){
    accessAllowed = true;
}else {
    accessAllowed = false;
}
console.log(accessAllowed);

// Using ternary ?.
//Question -> Why we call ? (conditional operator) sometime ternary.
// Ans --> Because is the condition operator has three operands. It is one and only operator in JS which has that many operands.

let accessAllowed_2;
let age_2 = 17;
accessAllowed_2 = age_2 >= 18 ? true : false;
console.log(accessAllowed_2);

//Question --> In above, we put age_2 in brackets(age_2 >= 18) and without brackets age_2 >= 18. Is we see any difference in output ? If yes, Why ? or not Why ?
//Ans --> No, there is no difference in output. Because ? is low precedence.
 
// We can use Multiple "?"

let age_3 = 100;
let message = (age_3 < 3) ? "Hi, Baby!"
 : (age_3 < 18) ? "Hello!" 
 : (age_3 < 80) ? "Greetings!" 
 : "What is unusual age!";

console.log(message);