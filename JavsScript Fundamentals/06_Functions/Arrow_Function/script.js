/* Arrow function */

// The syntax -->
//let func = (para, para,) => expression;

// Same as --> let func = function (para, para) {
//                            return expression;
//                                }

let sum = (a, b) => console.log(a+b);
sum(2, 2);    //It is return value
// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.
// Arrow functions are the shorter for of function.

// If we have only one argument, we can remove the parentheses  -->
let double = n => console.log(n * 2);
double(5);

// If no argument, () are empty but must be present -->
let showOk = () => console.log("Okk");
showOk();

// Multiline arrow function -->

let multipal = (a, b) => {
    let output = a * b;
    return console.log(output);
} 
multipal(2, 5)