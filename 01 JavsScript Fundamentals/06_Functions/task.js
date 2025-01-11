/* Is "else" required */
function checkAge(age){
    if(age > 18){
        return console.log(true)
    } else{
        return console.log("Did your parent allow");
    }
}
function ageCheck(age){
    if(age > 18){
        return console.log(true);
    }
    return console.log("Did your parents allow you?");
}
ageCheck(19);
checkAge(17);
/* No we don't need the else both cases return same output. */

/* Rewrite the function using '?' or '||' */

function userAgeCheck(age){
    if(age > 18){
        return console.log(true);
    } else {
        return console.log(false);
    }
}

/* Using ? */
function userAgeCheck_1(age){
  return (age > 18) ? console.log(true) : console.log(false)
}

/* Using || */
function userAgeCheck_2(age){
    return console.log((age > 18) || false);
}
userAgeCheck(17);
userAgeCheck_1(19);
userAgeCheck_2(17);
userAgeCheck_2(19);

/* Function min(a, b) */

function min(a, b){
    if(a > b){
        return(console.log(b));
    } else{
        return(console.log(a));
    }
}

function min_1(a ,b){
    return a > b ? console.log(b):console.log(a) ;
}
min(2, 5);
min(3, -1);
min(1, 1);
min_1(2, 5);
min_1(3, -1);
min_1(1, 1)

/* Function pow(x, n) */

function power(x, n){
    return console.log(x ** n);
}
power(3, 2);
power(3, 3);
power(5, 10);
power(1, 100);