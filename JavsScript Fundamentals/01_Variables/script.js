//We can declares the variable with any Name and put any information to it using assignment operator = 
let message = "Hello";
var userName = "John";
const age = 23;
console.log(message);
console.log(userName);
console.log(age);


/* We can define also this type  */
    /* let user = "Any Name";     
    let userAge = 00;
    let mail = "abc@gmail.com"; */

let user = "Any Name"     
, userAge = 0
, mail = "abc@gmail.com"
console.log(user);
console.log(userAge);     //00
console.log(mail);
/* We can change the value of let keyword/ var keyword both*/
/* But we can not change const value */
userAge = 1;
userName = "Sunny";
console.log(userAge);    //output change -> 1
console.log(userName);   //Sunny

/* const value is not change */
const myBirthDay = "23/12/2000";
/* myBirthDay ="01/01/2000"; */
console.log(myBirthDay)   //error

/* Naming Variable */
let firstName = "Happy",
    last_Name = "Jii",
    phone123 = "123456",
    _ = "we can use this to naming",
    $ = "Also use this";
/* They all things are valid */
/* We cam not use that*/
/* let 12ab = "anything",
    my-name = "anythings"; */
/* We use const as aliases for difficult-to-remember values*/
const COLOR_RED = "#F00";

console.log(COLOR_RED);
let myColor = COLOR_RED;
console.log(myColor);
