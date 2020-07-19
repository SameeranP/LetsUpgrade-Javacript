let p = prompt("Enter a number greater than 100");
console.log(p)
function rec(p){
if(Number(p)<=100 || p == ""){
    p = prompt(`Number was ${p} which is invalid, please enter a number greater than 100 `);
    rec(p)
    console.log(p);
    return p
    
}}

rec(p);