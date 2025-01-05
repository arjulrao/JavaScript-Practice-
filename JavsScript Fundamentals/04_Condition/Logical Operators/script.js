/* Logical Operator */
// OR || --> If any one true it return true.
console.log( true || false );       //true
console.log( false || true );       //true
console.log( true || true );        //true
console.log( false || false );      //false

// If value is not boolean it convert to boolean.
// truthy or falsy
// OR find first truthy value and it return true.
// If the all false it return last falsy value
// Return first truthy value as output.

if (1 || 0) {
    console.log("Truthy");
}

let hour = 12;

if (hour < 10 || hour > 18 ) {
    console.log( "The office is close.");
}

hour = 10;
let isWeekend = true;

if( hour < 11 || isWeekend || hour > 18) {
    console.log("The office is close.");
}

// It give the first truthy value and last one if no one is truthy.
console.log( 1 || 0);      // 1
console.log( 0 || false || NaN || null);    //null
console.log( undefined || 1 || true || null);   //1

// Feature
// Getting the first truthy value from a list of variable or expressions.
// Short-circuit evaluation.
let firstName = "";
let lastName = "";
let nickName = "";

console.log( firstName || lastName || nickName || "Who are you" || null);     // Who are you

/* && AND */
// AND return true if both operands are truthy and false otherwise.
console.log( true && false );   //false
console.log( false && true );   //false
console.log( false && false);   //false
console.log( true && true );    //true

// It find first false value. return it.
// If all the value are truthy it return last value.
// In other words, AND returns the first falsy value or the last value if none were found.

console.log( 1 && 5 && "Hello" && "You are right" && true);    // true, last truthy value

console.log( null && 0 && NaN && false && "" && undefined); //null, first falsy value

/* ! NOT */
//It change true --> false and false --> true.
// It accepts the single argument.

console.log( !true);    //false
console.log ( !false);   //true

console.log( !0);  //true
console.log( !undefined);   //true
console.log( !"Hello");    //false