/* STring Comparison */
// String are compared letter-by-letter.
console.log('A' < "B");   //true
console.log('a' < 'b');  //true
console.log('A' > 'a');   //false
console.log('apple' > 'Apple');  //true    
console.log('Happy' > 'Hello');  //false
// A capital letter "A" is not equal to the lowercase "a". 
// The lowercase "a" is greater.

/* Comparison of different type */
// JS convert different types into number.

console.log("2" > 1);   //true
console.log("01"  > 1);  //false
console.log("01" == 1);  //true

console.log("Happy" > 5);  //false
console.log("Hello" == NaN);  //false
console.log(null == 0);    //false
console.log(NaN == NaN);   //false
console.log(null == null);  //true
console.log(false == Boolean(null));  //true
console.log(false == 0); //true
console.log(null == 0);   //true
// It JS is not convert null to 0
console.log(null == undefined);  //true
//Null only show true with undefined

let a = 0;
console.log(Boolean(a));   //false
let b = "0";
console.log(Boolean(b));   //true, Because it consider 0 as a character. as
console.log(Boolean(" "));  //true
console.log(Boolean(""));  //false, It empty string
console.log(0 == false);   //true

// A strict equality operator === checks the equality without type conversion.
// For maths and other comparisons < > <= >=
//null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.
