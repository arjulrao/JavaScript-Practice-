/* Last loop value */
//What is the last value console by this code? why?
let i = 3;
while (i) {
    console.log( i-- );
} //3,2,1. 1 is the last value because when i became 0 it covet into false because loops convert the value into boolean. When it become false condition became falsy and code not execute. Code is only execute when condition is true.

/* Which values does the while loop show? */
//For every loop iteration, write down which value it outputs and then compare it with the solution.

//Both loops console the same value or not?
// The prefix 
let pre = 0;
while(++pre < 5) console.log(pre);   //1,2,3,4

// The postfix 
let post = 0;
while(post++ < 5) console.log(post); //1, 2, 3, 4, 5.
/* It show now value but return old value  */
/* The first value is again i = 1. The postfix form of i++ increments i and then returns the old value, so the comparison i++ < 5 will use i = 0 (contrary to ++i < 5).
But the alert call is separate. It’s another statement which executes after the increment and the comparison. So it gets the current i = 1.
Then follow 2, 3, 4…
Let’s stop on i = 4. The prefix form ++i would increment it and use 5 in the comparison. But here we have the postfix form i++. So it increments i to 5, but returns the old value. Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.
The value i = 5 is the last one, because on the next step while(5 < 5) is false. */
let aValue = 5;
let bValue = 5;
console.log(++aValue * 2)   //12
console.log(bValue++ * 2)   //10

/* Which values get shown by the "for" loop? */
// For each loop write down which value it is going to show. Then compare with the answer.
for (let i = 0; i < 5; i++) console.log(i); //01234
for (let i = 0; i < 5; ++i) console.log(i); //01234

for (let i = 0; i < 5;) console.log(i++); //01234
for (let i = 0; i < 5;) console.log(++i); //12345

/* Output even numbers in the loop 2-10 */
for (i = 1; i <=10; i++){
    if(i % 2 == 1) continue;
    console.log(`Even number ${i}`);
}

/* Replace "for" with "while" */
for ( let i = 0; i < 3; i++){
    console.log(`number ${i}`);
}
let num = 0;
while(num < 3){
    console.log(`number ${num}`);
    num++;
}

/* Repeat until the input is correct */

let userInput = 111;
askNumber: while(true){
    if(userInput >=100){
        console.log(userInput);
        break;
    }else if(userInput <=99){
        break askNumber;
    }
    break;
}

/* Output prime number upto n*/
let n =10
prime: for (let i = 2; i <= n; i++){
    
    for (let j = 2; j < i; j++){
        if(i % j == 0) continue prime;
    } 
    console.log(`Prime ${i}`);
}