let x = prompt("What operation do yoou want to perform(+,-,*,/,%,√)? ");
switch (x) {
  case '+':
    add();
    break;
  case '-':
    sub();
    break;
  case '*':
    mul();
    break;
  case '/':
    div();
    break;
  case '%':
    percentage();
    break;
  case '√':
    squareroot();
    break;

} 

function add() {
    let no1 = Number(prompt("Enter number 1"));
    let no2 = Number(prompt("Enter number 2"));
    let result = (no1) + (no2);
    console.log(`Addition of two numbers :${result}`)
    alert(result)
  }
  function sub(){
    let no1 = prompt("Enter number 1");
    let no2 = prompt("Enter number 2");
    let result = no1 - no2;
    console.log(`Difference of two numbers :${result}`)
    alert(result)
}
  function mul() {
    let no1 = prompt("Enter number 1");
    let no2 = prompt("Enter number 2");
    let result = (no1 * no2);
    console.log(`Product of two numbers :${result}`)
    alert(result)
}
  function div() {
    let no1 = prompt("Enter number 1");
    let no2 = prompt("Enter number 2");
    let result = (no1 / no2);
    console.log(`Division of two numbers :${result}`)
    alert(result)
  }
  function percentage() {
    let no1 = prompt("Enter number");
    let no2 = prompt("Enter the percent");
    result = (no1 * (no2 / 100));
    console.log(`${no2}% of ${no1} is ${result}`);
    alert(result)
  }
  function squareroot() {
    let no1 = prompt("Enter the number");
    result = Math.sqrt(no1);
    console.log(`Squre root of ${no1} is ${result}`);
    alert(result)
  }