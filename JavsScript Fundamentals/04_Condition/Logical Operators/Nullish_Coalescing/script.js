// Let's see -->
let a = 5;
let b = 3;
let output = (a !== null && a !== undefined) ? a : b;
console.log(output);   // 5, Because a is defined. if a is not defined or null is use second value 3.

a = null;
output = a ?? b;
console.log(output);   // 3, Because a is null it automatic take second argument.

let firstName;
let lastName;
let nickName = "Coder..";

let showUserName = firstName ?? lastName ?? nickName ?? "Anonymous";
console.log(showUserName);   //Coder.., because nickname is defined

//we can write -- OR || is give the same result.
nickName = undefined;
let userName = firstName || lastName || nickName || "Anonymous";
console.log(userName); //Anonymous, because all are undefined.
firstName = 'Arjul';
userName = firstName || lastName || nickName || "Anonymous";
console.log(userName);  // Arjul, because we define the first name.

// Difference  between OR || and Nullish Coalescing ?? 
//  || returns the first truthy value.
//  ?? returns the first defined value.

let isHappy = false;
console.log(isHappy || true);   //true, because first value is false.
console.log(isHappy ?? true);  //false, because first value is defined.
let aValue = null;
console.log(aValue || "Second")  // second
console.log(aValue ?? "Second")  // Second

let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);
console.log(area);    //100*50 = 5000.

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.