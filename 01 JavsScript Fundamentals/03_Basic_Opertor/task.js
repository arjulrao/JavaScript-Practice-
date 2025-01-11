// The postfix and prefix forms
let a = 1, b = 1;
let c = ++a;    //2
let d = b++;    //1
console.log(c);
console.log(d);

//Assignment result
let num = 2;
let x_num = 1 + (num *=2);    //5
console.log(x_num);

// Type conversions
let t1 = "" + 1 + 0;    // 10, String
let t2 = "" -1 + 0;     // -1, Number
let t3 = 6/"3";         // 2, Number
let t4 = "2" * "3";     //6, Number
let t5 = 4 + 5 + "px";  //9px, string
let t6 = "$" + 4 + 5;   //$45, String
let t7 = "4" - 2;       //2, Number
let t8 = "4px" - 2;     //NaN, Number
let t9 = "  -9  " + 5;  //"  -9  5", String
let t10 = "  -9  " - 5;  // -14, Number
let t11 = null + 1;     // 1, Number
    t12 = undefined + 1;   //NaN, Number
    t13 = " \t \n" -2;     //-2, Number
    t14 = true + false;    //1, Number

console.log(typeof(t1));
console.log(typeof(t2));
console.log(typeof(t3));
console.log(typeof(t4));
console.log(typeof(t5));
console.log(typeof(t6));
console.log(typeof(t7));
console.log(typeof(t8));
console.log(typeof(t9));
console.log(typeof(t10));
console.log(typeof(t11));
console.log(typeof(t12));
console.log(typeof(t13));
console.log(typeof(t14));


let input = +prompt("First Number", 1);
let input2 = +prompt("second Number", 2);

alert(input + input2);   //3