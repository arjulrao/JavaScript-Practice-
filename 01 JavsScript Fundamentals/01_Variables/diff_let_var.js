/* Difference between let and var */
// Let is a block scope
// var is a Global scope 
// What is Block --> { .... }

/* They both are in Global scope we can axis anywhere.*/
let firstName = "user_first_name";
var lastName = "user_last_name";

/*  But in Block */

{
    let userCity = "Delhi";
    firstName = "Arjul";
}
{
    var userCountry = "India";
    lastName = "Rao";
}
// console.log(userCity);    //error ->userCity is not defined
console.log(userCountry);

/* If we change the global scope variable in block. We see the update value in both case */
console.log(firstName);    //Arjul
console.log(lastName);     //Rao

let message = "My name is " + firstName +" "+ lastName;  
console.log(message)     //My name is Arjul Rao