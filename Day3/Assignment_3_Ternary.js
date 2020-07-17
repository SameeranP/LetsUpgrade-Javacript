let x = prompt("Enter your marks out of 100: ")
m = Number(x);
let a = (m>90 && m<=100)? console.log(`Marks are ${m} and the grade is A+`):
        (m>80 && m<=90) ? console.log(`Marks are ${m} and the grade is A`):
        (m>70 && m<=80) ? console.log(`Marks are ${m} and the grade is B+`):
        (m>60 && m<=70) ? console.log(`Marks are ${m} and the grade is B`):
        (m>50 && m<=60) ? console.log(`Marks are ${m} and the grade is C`):
        (m>40 && m<=50) ? console.log(`Marks are ${m} and the grade is D`):
        (m<=40 && m>=0) ? console.log(`Marks are ${m} and the grade is F. Sorry, You failed`):
        console.log("Please enter a valid input and try again.")

