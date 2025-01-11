/* Rewrite the arrow functions */

function ask(question, yes, no) {
    if (question) yes();
    else no();
}
ask(
    "Do you agree",
    function() { console.log("Okk, yes")},
    function() { console.log("Noo,")}
)

let askQuestion = (question, yes, no) => {
    if(question) yes();
    else no()
};

ask( 
    0, 
    () => { console.log("OKk")},
    () => { console.log("Noo.")}
)