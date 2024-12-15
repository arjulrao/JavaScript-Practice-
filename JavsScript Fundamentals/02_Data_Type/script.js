/* What is Dynamically Typed */
/* We can change the value of a variable after the assign. */
// First, 
let a = "Hello";
//Then, 
a = 123;
//First we assign the string the we change it and assign number to it. We can do that in JS.

/* Data Types */
// String 
let message ="Hello Sir";
let first_name = 'Arjul';
let last_name = `Rao`;
const date_of_birth = "01/01/01"

// Number
let num = 123;
const a_value = 25;
let n = 12.45;
// There are many operations for numbers, e.g. multiplication *, division /, addition +, subtraction -, and so on.
let sum = num+n;
console.log(sum);   //135.45
//Infinity
let div  = 1/0;   
console.log(div);     //Infinity
//NaN
let multi = "Hello"*2;
console.log(multi);    //NaN 
console.log(3 * NaN);  //NaN
console.log(NaN **0);  //1, Only this is exception
console.log(NaN ** 2); //NaN

//BigInt
// const error = 3**57n;   //error, type is not same.
const number = 3**57;
const big_Int = 3n**57n;
console.log(number);  //1.5700428990820816e+27 
console.log(big_Int); //1570042899082081611640534563n

// Boolean 
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGra = 4>1;
console.log(isGra);   //True

//Null
let age = null;
console.log(age);  //null
//We assign the null to variable.

//Undefined
let something;
console.log(something);    //undefined
// That means value is not assign.

let und = undefined;
console.log(und);    //undefined
// But it is not prefer. We use null here.

//Symbol
//Object

/* typeof operator */
console.log(typeof "Hello");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof 12n);
console.log(typeof undefined);

console.log(typeof null);  //It show object. That's Bug.



console.log(typeof alert);   //Function, because it a function
console.log(typeof Math);  //Object, built-in object that provides mathematical operations

let check_Type = "123";
console.log(typeof(check_Type));  //String
const type_Value = "Arjul";
console.log(typeof type_Value);  //String.