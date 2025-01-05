// The name of JavaScript 
// let answer = prompt("What is the name of JavaScript?", "");
// if(answer == "ECMAScript"){
//     alert("Right");
// }else{
//     alert("You don't know ? ECMAScript");
// }


// Rewrite if into ?

let result,
    a = 2,
    b = 3;

if (a + b < 4) {
    result = "Blow";
} else {
    result = "Over";
}
console.log(result);

let output = (a + b < 4) ? "Blow" : "Over";
console.log(output);

// Question -->
let message;
let login = "";
if (login == 'Employee') {
    message = "Hello";
} else if (login == 'Director') {
    message = "Greetings";
} else if (login == "") {
    message = "No login";
} else {
    message = "";
}

console.log(message);

let who = 'Director';
message_2 = (who == "Employee") ? "Hello" 
    : (who == "") ? "No Login" 
    : (who == "Director") ? "Greetings" 
    : "";

console.log(message_2);