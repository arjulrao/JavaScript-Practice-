/* Switch  */
// Syntax of switch statement --> 
// switch(expression) {
//     case x:    // if expression is equal to x
//         // code block
//         break;  // break statement is used to exit the switch statement
//     case y:     // if expression is equal to y
//         // code block
//         break;  
//     default:   // if expression is not equal to x or y
//         // code block  
// }

// Example
let day = 2;

switch(day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Day not found");
}    // Output: Tuesday

// Example -->
let a = 2 + 2;

switch(a) {
    case 1:
        console.log(`Value : ${a}`);
        break;
    case 2:
        console.log(`Value : ${a}`);
        break;
    case 3:
    case 4:
    case 5:
        console.log(`Value : ${a}`);
        break;
    default:
        console.log(`Value not match`);
}    //Value 4 
// We can combine the multiple case with same output.
// Aagr ham code ka bad break use nhi kraga to condition true hona ka bad jitna bhe case hoga sab execute ho jaata hai yunke condition check nhii hoti.