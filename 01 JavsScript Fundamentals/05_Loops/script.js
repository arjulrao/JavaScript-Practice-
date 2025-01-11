/* while loop */
// while loop syntax -->
// while ( condition ) {
//       code 
//      so called loop body
//        }

let a = 0;
while (a <= 10 ){
    console.log(a)
    a++;
}     // it print the number 1 to 10.
// While the condition is truthy code execute otherwise code not execute.
// What happen if we remove a++ in above code?
//Ans -> If we remove a++ code is repeat forever, because condition remain always true.
// Question --> What is iteration ?
// A single execution of the loop body is called an iteration. 

let i = 3;
while (i) {
    console.log(i);
    i--;    // first i=3, i=2, i=1, i=0;
}    // 3 2 1 then stop. Because 0 is falsy.
//Condition is convert to boolean by while. 0 is falsy value and loop is execute when condition is true.
//but
i = 4;
while (i >= 0){
    console.log(i)
    i--;
} //Here it print 4,3,2,1,0. Because now it check the full condition (i >=0) not only i=0.

let n = 5;
while (n){
    console.log (n--)
}   //5, 4, 3, 2, 1.

let aName = "Arjul"
while (aName) {
    console.log(aName);
    aName = null;
}    // Only one time Arjul, because aName = null, null is falsy value.

/* do while loop */
// The condition check can be moved below the loop body.
// In do while loop code body is execute then check condition. while it truthy it execute again if not execute.
// That's means do while loop always execute at least one time.

// Syntax -->
// do {
//      code
// } while (condition);

let i_1 = 0;
do{
    console.log(i_1);
} while (i_1);    // only 0, because it execute once only.
// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

/* for loop */
// Syntax -->
/* for (begin; condition; step) {
        loop body
        } */

// begin --> Execution once upon entering the loop.
// condition --> Checked before every loop iteration. if false, the loop stops.
// body --> Runs again again while condition is truthy
// step --> Executes after the body on each iteration.

for (let i = 1; i <= 5; i++){
    console.log(`Step ${i}`);
}
/* Working flow --> begin --> condition check (true) --> code execute (body) --> step --> condition check (true) --> body --> step --> condition check (false) -stop. */

for (let i = 0; i; i++){
    console.log(`Check ${i}`);
}   //It not execute not a single time because --> let i = 0; when condition check i = 0 (false) --> stop.

// That is, begin executes once, and then it iterates: after each condition test, body and step are executed.

/* Write if condition into for loop and while loop. */
let num = 0;
if (num < 3) {
    console.log(`Number ${num}`);
    num++
}    // Execute --> 0.
if (num < 3) {
    console.log(`Number ${num}`);
    num++
}  // 1
if (num < 3) {
    console.log(`Number ${num}`);
    num++
}   // 2
if (num < 3) {
    console.log(`Number ${num}`);
    num++
}   // Not execute because num = 3, so condition false.

/* Note --> In this for loop we use num which is defined outside the loop. */
for(num = 0; num < 3; num++){
    console.log(`For ${num}`);
}

num = 0;
while (num < 3) {
    console.log(`While ${num}`);
    num++;
}

/* Breaking the loop */
// Normally, a loop exits its condition is falsy.
// But we can force the exit at any time using the special "break" directive.

/* For example, the loop below asks the user for a series of numbers, "breaking" when no number is entered */

// let sum = 0;

// while(true) {
//     let value = 1;
//     if(!value) break;
//     sum += value
//     console.log(`Sum: ${sum}`);
// }

// "continue" to the next iteration
// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

for (let i =0; i <10; i++){
    if (i % 2 == 0) continue;
//  remark --> here if condition become true then continue skip only one iteration.
    console.log(i);
} // 1, 3, 5, 7, 9
/* Exp--> loop condition --> (i < 10). 
          if condition --> (i % 2 == 0) skip(continue) 
    first -> i = 0, (0 < 10) -> true loop start
     if check (0 % 2 = 0) --> true, (iteration skip) 
    again start -> i++, i=0+1 = 1. (1 < 10) -> true
    if check (1 % 2 = 1) --> false 
    console.log(1)    --> again 
    i++ = 1+1 =2, (2 < 10) --> true
    if check (2 % 2 = 0 ) --> true continue(iteration skip) --> again i++, (2 + 1 = 3),  (3 < 10) --> true
    if check (3 % 2 = 1 ) -->  false -->
    console.log(3)  --> again
    i++ = (3+1=4), (4<10) --> true
    if check (4 % 2 = 0) --> true, iteration skip -->again
    i++ =(4 + 1 = 5), (5 <10 ) --> true
    if (5 % 2 = 1) --> false --> 
    console.log(5) --> again un till (10 < 10) --> false
    */
for (let i =0; i < 10 ; i++){
    if (i % 2 == 1) break;
    console.log(i);
}  //// 0
/*  it console only 0, because in first iteration ->
    if check --> (0 % 2 = 0) --> false --> console.log(0) -->
    i++= (0+1=1) --> (1<10)-> true -->
    if check (1 % 2 = 1) --> true break it stop all the upcoming iterations   */

    let number = 0;
    while(true){
    console.log(number);
    number++;
    if (number == 5) break;
    }   //It is a infinite loop but break stop that loop when it reach to 5.
 

/* Difference between "break" and "continue" ?*/
/* The main difference between break and continue is that,
The break exits the loop, and stop further iteration. And
the continue skips the current iteration and proceeds the next iteration of the loop. */
// Break -->
for (let i = 1; i <= 5; i++){
    if (i == 3) break;
    console.log(`Break ${i}`);
}   // 1, 2, when i = 3 it stop iteration and exit loop.
// continue
for (let i = 1; i <= 5; i++){
    if (i == 3) continue;
    console.log(`continue ${i}`);
} // 1, 2, 4, 5. only 3 skip.

/* Labels for break/ continue */
// Most of the time we use labels with the nested loops.

for(let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let input = `Without break ${i} ${j}`
        console.log(input);
    }
}
/* 00 01 02 10 11 12 20 21 22 */
// When we are using break without label
for(let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let input = `inner ${i} ${j}`
        if (i == 1 && j == 1) break;
        console.log(input);
    }
}
/* 00 01 02 10 20 10 22 */
// When we are using break with label
outer: for(let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        let input = `use label ${i} ${j}`
        if (i == 1 && j == 1) break outer;
        console.log(input);
    }
}  /* 00 01 02 10 */

/* Output --> Jab hamna without break ka number print kra to hamara number --> 00 01 02 10 11 12 20 21 22 print hua. 
jab with break kra to hamra ma if condition true hona par 11 and 12 print nhi hua, because hamara break only inner loop ko stop kar paaya jiska hisab sa only 11 12 print hona tha outer loop par koi effect nhii hua.
Jab hamne label ka use kra to only 00 01 02 10 ka bad kuch bhe print nhii hua because 11 par if condition true hota he break na loop sa bhar kar diya and hamna break ko label da rakkha tha to and yus label ko outer loop par set kar rakkha tha isliya break only inner par nhii laga direct outer loop par laga.*/

