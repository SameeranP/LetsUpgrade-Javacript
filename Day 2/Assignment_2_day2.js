{
let myString = 'I love coding in JS';
console.log(myString.charAt(7));
}
let message="Sam"
let final=message.concat(" is a"," hopeless romantic.")
console.log(final)

let sentence="Hi, my name is Sam!"
if (sentence.indexOf("Sam")!=-1)
console.log("Sam is in there!")
{
//lastIndexOf(substr, [start])
let myString = 'javascript rox';
console.log(myString.lastIndexOf('r'));
}

{
let myString = 'javascript rox';
myString = myString.substring(0,10);
console.log(myString)
}

{let myString = 'JAVASCRIPT ROX';
myString = myString.toLowerCase();
console.log(myString)}

{
let myString = 'javascript rox';
myString = myString.toUpperCase();
console.log(myString)
}

{//replace(substr, replacetext)
let myString = 'I am a JavaScript Coder';
console.log(myString.replace(/JavaScript/i, "Python"));

}
{
let text="excellent"
console.log(text.slice(0,4)) //returns "exce"

let message="Welcome to jQuery4u"
//word[0] contains "We"
//word[1] contains "lcome to jQuery4u"
let word=message.split(" ")
console.log(word)
}


//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
{
let string_arr = [ "piyush", "gourav", "smruti", "ritu" ]; 
console.log(string_arr)
string_arr.push("sumit", "amit"); 
console.log("After push op " + string_arr)
}

{
let number_arr = [ 20, 30, 40 ]; 
console.log(number_arr)
number_arr.unshift(10, 20);
console.log("After unshift op " + number_arr);
}

{
let number_arr = [ 20, 30, 40, 50 ];
console.log(number_arr)
number_arr.pop();
console.log("After pop op " + number_arr);
}

{
    let number_arr = [ 20, 30, 40, 50, 60 ];
    console.log("Before shift op " + number_arr);
    number_arr.shift(); 
    console.log("After shift op " + number_arr); 
}

{
    let number_arr = [ 20, 30, 40, 50, 60 ];
    console.log("Before splice op " + number_arr);
    // deletes 3 elements starting from 1 
// number array contains [20, 60] 
    number_arr.splice(1, 3); 
    console.log("After splice op " + number_arr);
    // doesn't delete but inserts 3, 4, 5 
// at starting location 1 
number_arr.splice(1, 0, 3, 4, 5);
console.log("After splice op " + number_arr);
}