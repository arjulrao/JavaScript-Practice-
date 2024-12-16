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

/* Type Conversions */
console.log("### Type Conversions ###")
// String Conversion --> Convert to string
//Keyword - String
let bool_Value = true;
console.log(typeof bool_Value);    //Boolean true
bool_Value = String(bool_Value);
console.log(typeof bool_Value);   //String "true"

let num_Value = String(23);
console.log(typeof num_Value);    //String "23"

/* Numeric Conversion */
//Keyword - Number
let str_Value = "123";
console.log(typeof Number(str_Value));  //number, 123

let tru_Value = true;
console.log(typeof Number(tru_Value)); // number, 1
let str_Value_2 = "Hello"   
console.log(typeof Number(str_Value_2))   //number, NaN
let null_Value = null;
console.log(typeof Number(null_Value))   //number, 0
let und_Value = undefined;
console.log(typeof Number(und_Value))    //number, NaN
let emp_Str = ""  //or "     "
console.log(typeof Number(emp_Str))       //number, 0

//Numeric conversion in mathematical functions and expressions happens automatically.

console.log("3"+"6")     //36, String
console.log("6"-"3")     //3, number
console.log("3"*"6")     //18, number
console.log("6"/"3")     //2, number
console.log("HelloJi"+2)  //HelloJi2, string
console.log("HelloJi"-2)  //NaN, number
console.log("HelloJi"*"2")   //NaN, number
console.log("HelloJi"/2)     //NaN
console.log(typeof(true + 1))   //2 ,number
console.log(false + 1)    //1, number
console.log(false/2)     // 0 ,number    
console.log(2 - null)    // 2 ,number
console.log(2 - undefined) //NaN

/* Boolean Conversion */
//Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
//Other values become true.
//Keyword - Boolean
console.log(Boolean(1));  //true
console.log(Boolean(0));  //false

console.log(Boolean("Hello")); //true
console.log(Boolean("")); //false
console.log(Boolean("0"));  //true
