/* Maths */
// All Operations --> Add +, Sub -, Multi *, Division /, Remainder %, Exponentiation **
console.log(2+5);    //7
console.log(5-2);    //3
console.log(5*2);    //10
console.log(6/2);    //3
console.log(5%2);    //1
console.log(6%2);    //0 
console.log(9%7);    //2 
console.log(2**2);   //4
console.log(3**2);   //9
console.log(4**(1/2));  //2
console.log(27**(1/3));   //3 

/*String concatenation with binary + */
let fir_Str = "Arj";
let sec_Str = "ul";
console.log(fir_Str+sec_Str);     //Arjul
console.log("Hel"+"lo")     //Hello
console.log("Arjul"+" "+"Rao")   //Arjul Rao

// Note that if any of the operands is a string, then the other one is converted to a string too.
let str = "Number"
let num = 23;
console.log(str+num)    //Number23, It convert number to string
console.log(str-num)    //NaN, Because: -, *, / not convert to string.
console.log(11+"Hello")   //11Hello
console.log(23+"2")    //232
console.log("11"+"11")   //1111

console.log(2+2+"3")    //43, Because, 2+2 became 4 and "3" convert 4->"4".So 43.
console.log("2"+3+2)   //232, Because, "2" convert 3-- "3" and "3" convert 2-- "2". 
console.log(2+"2"+2)   //222
console.log(2+2+"2"+2)   //422
console.log("2"+2+3+4+6)   //22346

/* Numeric conversion, unary + */
// The plus operator + applied to a single value(unary), doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.

console.log(+2)   //2
console.log(+(-2))    //-2
console.log(+"5")    //5, Number
console.log(+"4")    //4, Number
console.log(+"Hello")    //NaN

console.log(+true)    //1
console.log(+false)    //0
console.log(+"")      //0
console.log(+undefined)   //NaN
console.log(+null)     //0

let a_Value = "5";
let b_Value = "5";
let sum_A_B = a_Value + b_Value 
console.log(sum_A_B)     //55, String
console.log(+sum_A_B)    //55, Number
sum_A_B = (+a_Value) + (+b_Value)
console.log(sum_A_B);   //10

/* Operator precedence --> If we unary plus +, unary negation -, **, *,  /, Binary(addition) +, - , = . But () override this */
let pre = 2+2-5*2
console.log(pre);    //-6
console.log(2+5+7-(5*2-4)+4*2)    //16

/* Assignment (=) --> It is also a operator. It precedence is very low. It is on nu. 2.*/
let ass = 2*5*7*0-2+5;
console.log(7);   //7, It first calculate and then assign.
/* Assignment = returns a value */

let a, b, c;
console.log(a);     //undefined
console.log(b);     //undefined
console.log(c);     //undefined
a = b = c = 2+2;
console.log(a);     //4
console.log(b);     //4
console.log(c);     //4

/* Modification in Place */
let value = 2;
value = value + 2;     //4
value = value * 5;     //10

value += 3;      //5
value *= 2;      //4

let expo = 5;
expo **=2;     //25;
console.log(expo);   


/* Increment/decrement --> Inc/Dec by 1. */
let inc = 2;
console.log(++inc);    //3
console.log(inc++);    //3
let dec = 2;
console.log(--dec);   //1
console.log(dec--);   //1

//But,
// When the operator goes after the variable, it is in “postfix form”: counter++/ counter--.
// The “prefix form” is when the operator goes before the variable: ++counter/ --counter.
//The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).

let prefix = 5;
let return_prefix = ++prefix;
console.log(return_prefix);    //6
return_prefix *= 2;
console.log(return_prefix);   //12

let postfix = 5;
let return_postfix = postfix++;
console.log(return_postfix);   //5
return_postfix = return_postfix * 2;
console.log(return_postfix);    //10

/* Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error. */

// console.log(5++);      Error.
