/* Function Declaration */
// To create a function we can use a function declaration.
/* function name(parameter1, parameter2, ... parameterN) {
     body
} */
function showMessage(){
    console.log("Hello I am function");
}

// Call a function  --> We can called by its name.
showMessage();     //Hello I am function
showMessage();      //Hello I am function
// Here we call the function two times so it print Hello I am function two times in console.


/*Local Variable --> If we declared  a variable inside a function it can't be access outside the function.*/
function alertMessage(){
    let alertUser = "Hello, I am in";
    console.log(alertUser);    //we access variable inside
}

/* Try to access variable(alertUser) outside the function */
//console.log(alertUser);     //error
// alertMessage = "Hello";    //error
/* It give an error because variable create inside the function and it is only access inside the function. That is a local variable. */

/*Function call -> */ alertMessage();    //Hello, I am in

/* Outer Variable --> We can access global variable inside the function, means if any variable is declare outside the function we can access that variable inside the function. */

let userName = "Arjul";

function userMessage(){
    let message = `Hii, I am in ${userName}.`;  /* Here we use outer variable inside the function(userName).*/
    console.log(message);   /* Output --> Hii, I am in Arjul. */
}
userMessage();    //Hii, I am in Arjul.

// We are not only access the variable we can also modify it.
/* Note --> If we modify outer variable inside the function and then we access that value outside the function the updated value show on the output. But only after the function call.*/

console.log(userName);     //Arjul
function showUserMessage(){
    userName = "Moin";    //Modify the userName
    let message = `Hii, ${userName}`;  //use new value
    console.log(message);     // Hii, Moin
}
console.log(userName);   // Arjul,  No Change But after the function call it will update.
showUserMessage();    //Hii, Moin
/* We change userName inside we modify value show also outside the function. But it happen only after the function call.*/
console.log(userName);   //Moin

/* Parameters -->  They allow you to pass input values (arguments) into the function when it is called, enabling the function to perform operations based on those inputs.*/
/* function name(para1, para2, etc,...){
    body code
    } */
/* function call --> name(argument1, argument2, etc,...) */
function sum(a, b){    //parameters
    let sum = a + b;
    console.log(sum);
}
sum(2,6);    //8, (arguments)
sum("4", "6");  //46


function location(firstCity, secondCity){
    let location = `From : ${firstCity} to ${secondCity}`;
    console.log(location);
}
location("Hapur", "Delhi");   //From : Hapur to Delhi
location("Bul.", "Gzb");      //From : Bul to Gzb
/* A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term). */

/* Default Value --> If a function is called, but argument is not provide, then the default value is "undefined".*/
function userIsHappy(userName, isHappy){
    console.log(`My name is ${userName} and I am ${isHappy}.`);
}
userIsHappy();   //My name is undefined and I am undefined.

/* Set default value */

function userInfo(name, age = 25){
    console.log(`My name is ${name} and My age is ${age}.`);
}
userInfo("Arjul", 23);   //My name is Arjul and My age is 23.
userInfo("Arjul")    //My name is Arjul and My age is 25.

function userInfo_2(name, age = 18){
    if(age === undefined){
        console.log(`Your name is ${name}. Please enter you age.`)
    } else if(age >= 0 && age <=18){
        console.log(`Your name is ${name} and Your age is ${age}. Not valid user.`);
    } else if(age >= 19 && age <=60){
        console.log(`Your name is ${name} and Your age is ${age}. Welcome.`);
    } else{
        console.log("Error");
    }
}
userInfo_2("Arjul", 22); //Your name is Arjul and Your age is 22. Welcome.
userInfo_2("Arjul"); //Your name is Arjul and Your age is 18. Not valid user.
userInfo_2("Arjul", 18); //Your name is Arjul and Your age is 18. Not valid user.
userInfo_2("Arjul", undefined); //Your name is Arjul and Your age is 18. Not valid user.

/* Returning a value --> A function can return a value back into the calling code as the result. */

function a(a, b){
    return a + b;
}
console.log(a(2, 2));   //4
function b(a, b){
    a+b;
}
console.log(b(2, 4))   //undefined
function c(a, b){
    console.log(`Value a: ${a} and value b: ${b}.`);
    console.log(`Total of a and b is : ${a + b}`);
}
c(6, 4); /* Value a: 6 and value b: 4.
Total of a and b is : 10 */
console.log(c(6,4));  /*  Value a: 6 and value b: 4.
Total of a and b is : 10
return --> undefined  
*/
/* By default function return undefined.*/
function d(a, b){
    let sum = `Value A: ${a} and Value B: ${b}. Total: ${a + b}.`;
    return sum;
}
console.log(d(2,2));    // Return -->Value A: 2 and Value B: 2. Total: 4.

function multiple(a, b, c){
    let multipleValues = a * b * c;
    return multipleValues;
}
function multiple_2(a, b, c){
    return a * b * c;
}

let multipalTotal = multiple(2, 3, 5);
console.log(multipalTotal); //30
let multipalTotal_2 = multiple_2(2, 3, 5);
console.log(multipalTotal_2);   //30

function abc(a, b){
    return `The first value ${a},second value ${b}. Multipal ${a*b}`
}
let abcMultipal = abc(5, 2);
console.log(abcMultipal);  //The first value 5, second value 2. Multipal 10

function showPrimeNumber(n){
    nextPrime: for(let i = 2; i < n; i++){

        for(let j = 2; j < i; j++){
            if(i % j == 0) continue nextPrime;
        }
        console.log(i);
    }
}
showPrimeNumber(20);
/* Working flow --> n = 20. 
    first i = 2,  2 < 20 (true) -->
    j = 2 --> 2 < 2 (false) --> prime 2. -->
    i++ (2+1= 3) --> 3 < 20 (true) -->
    j = 2 --> 2 < 3(true) --> 3 % 2 == 1(false) --> j++ (2+1 = 3) --> (j<i)(3 < 3)(false) --> prime 3. -->
    i++ (3+1 = 4) --> 4 < 20(true) -->
    j = 2 --> 2 < 4 (true) --> 4 % 2 = 0(true) --> continue nextPrime --> i++ (4+1= 5) --> 5 < 20(true) --> 
    j =2 --> 2 < 5(true) --> 5 % 2=1(false) --> j++ (2+1 = 3) -->
    3 < 5(true) --> 5%3 =2(false) --> j++ (3+1= 4) --> 4 < 5 (true) --> 5 % 4 =1 (false) --> j++ (4+1 = 5) --> 5 < 5(false) --> prime 5. --> i++ (5+1 =6) --> 6 < 20 (true) -->
    j =2 --> 2<6(true) --> 6%2 =0 (true) --> continue nextPrime -->
    i++ (6+1 = 7) --> 7<20(true) --> 
    j =2 --> 2 < 7(true) --> 7%2= 1(false) --> j++ (2+1 = 3) -->
    3 < 7 (true) --> 7%3 = 1(false) --> j++ (3+1 = 4) --> 4<7(true) --> 7 % 4 = 3(false) --> j++ 
    and so on..... 
*/

function showPrime(n){

    for (let i = 2; i < n; i++){
        if (!isPrime(i)) continue;

        console.log(i);
    }
}
function isPrime(i){
    for (let a = 2; a < i; a++){
        if(i % a == 0) return false;
    }
    return true;
}
showPrime(10);

/* Next Module --> Function Expressions */

/* The syntax --> 
    let sayHi = function(){
        console.log("Hello Sir..")
        } 
        
    sayHi();
*/
// In Function expression we assign a function as a variable.
// In function expression there is no need to give the function name after function keyword.

/* Error --> 
let hello = function hey(){
    console.log("I am In");
}
hello();
hey(); 
That code give the syntax error..
*/   

/* Difference between Function Expression and Function Declaration */
// The Syntax --> There syntax are different.
//A Function Declaration can be called earlier than it is defined. We can call anywhere in the script.
// A Function Expression is created when the execution reaches it and is usable only from that moment.

dec();     //It works

// exp();     //It is not work

function dec(){
    console.log("Hey I am dec..")
}

dec();     //It works

let exp = function(){
    console.log("I am exp..");
}
exp()    //It works
/* We can only call after the function assign.  */


/* Function is a Value */
// Function Expression and Function Declaration both are store a function as a value no matter how to create it.

// They both are give value as -->
let aValue = "How are you";
console.log(aValue)   // How are you
//Same they give the same that we write.
function happy(){
    console.log("I am Happy");
}
console.log(happy)   //Note we don't use () in the end of happy
// So it show the code --> function happy(){
//                            console.log("I am Happy");
//                                }

let sad = function(){
    console.log("I am sad");
}
console.log(sad);  // function () {
//                      console.log("I Am sad");
//                        }

//So function is a value we can use function and treat function as a value.

function aFun(){
    console.log("I am first one");
}

let bFun = aFun;

aFun();
bFun();   
// They give the same output
