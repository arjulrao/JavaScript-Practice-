/* Rewrite the "switch" into an "if" */

let browser = "Chrome";
switch(browser) {
    case 'Edge':
        console.log("You are using Edge!");
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        console.log(`You are using ${browser}!`);
        break;
    default:
        console.log('What browser you are using ?');
}

browser = "xyz";
if(browser == "Edge"){
    console.log("Great choice you are using Edge!");
 } else if(browser == ("Chrome" || "Firefox" || "Safari" || "Opera")){
    console.log(`Good one, You are using ${browser}!`);
 } else{
    console.log("OK we support this also");
}

// Second way -->
if(browser == "Edge"){
    console.log("Great choice you are using Edge!");
 } else if(browser == "Chrome" 
    || browser == "Firefox" 
    || browser == "Safari" 
    || browser == "Opera"){
    console.log(`Good one, You are using ${browser}!`);
 } else{
    console.log("OK we support this also");
}


/* Rewrite into switch */

let a = 2;
if (a == 0){
    console.log(a);
}
if (a == 1){
    console.log(a);
}
if (a == 2 || a == 3) {
    console.log("2, 3");
}

switch(a){
    case 0:
        console.log(a);
        break;
    case 1:
        console.log(a);
        break;
    case 2:
    case 3:
        console.log("2, 3")
}
// And we can write -->
switch(a){
    case 0:
        console.log(a);
        break;
    case 1:
        console.log(a);
        break;
    case (2 || 3):
        console.log("2, 3")
}