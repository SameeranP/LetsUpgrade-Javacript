let x = prompt("Enter your marks out of 100: ")
m = Number(x);
if (m>90 && m<=100)
{console.log(`Marks are ${m} and the grade is A+`)}

else if (m>80 && m<=90)
{console.log(`Marks are ${m} and the grade is A`)}

else if(m>70 && m<=80)
{console.log(`Marks are ${m} and the grade is B+`)}

else if(m>60 && m<=70)
{console.log(`Marks are ${m} and the grade is B`)}

else if(m>50 && m<=60)
{console.log(`Marks are ${m} and the grade is C`)}

else if(m>40 && m<=50)
{console.log(`Marks are ${m} and the grade is D`)}

else if(m<=40 && m>=0)
{console.log(`Marks are ${m} and the grade is F. Sorry, You failed`)}
 
else
{console.log("Please enter a valid input and try again.")}

