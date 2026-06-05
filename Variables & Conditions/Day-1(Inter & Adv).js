// INTERMIDIATE:
//1.Check whether a person is eligible to vote.
let a = 18;
if (a >= 18){
    console.log("Eligible");
}
else{
    console.log("Not Eligible");
}

//2.Find the larger of two numbers
let c = 12;
let b = 7;
res = c>b ? c : b;
console.log("res:",res);

//3.Find the largest of three numbers.

let a1 = 12;
let a2 = 7;
let a3 = 27;
if (a1>=a2 && a1>=a3){
    console.log("a1 is large");
}
else if(a2>=a3 && a2>=a3){
    console.log("a2 is large");
}
else{
    console.log("a3 is greater:",a3);
}

//4.Check whether a year is a leap year.
let year = 2004;
if (year % 4 === 0){
    console.log("Its a Leap Year");
}
else{
    console.log("Its not a Leap Year")
}

//5.Check whether a number is divisible by 5.
let number = 2505;
if (number % 5 ===0){
    console.log("Divisible by 5");
}
else{
    console.log("Not divisible by 5");
}

//6.Check whether a number is divisible by both 3 and 5.
let num1=999;
let res1= num1 % 3 === 0 && number % 5 ===0 ? "Divisible by 3 and 5" : "Not Divisible";
console.log(res1);

//7.Grade Calculator: 90+ → A, 80+ → B, 70+ → C, Else → Fail
let n1 = 97
if(n1 >= 90){
    console.log("A Grade");
}
else if(n1 >=80){
    console.log("B Grade");
}
else if(n1 >= 70){
    console.log("C Grade");
}
else {
    console.log("Fail");
}

//8.Check whether a character is a vowel.
ch = "i"
if ( ch === 'A '|| 'E' || 'I' || 'O' || 'U'){
    console.log("Vowel");
}
else{
    console.log("Not a Vowel")
}

//9.Check whether a character is uppercase or lowercase.
cha= "P"
if( cha >= "A" && cha <= "Z"){
    console.log("Uppercase")
}
else{
    console.log("Lowercase")
}

//10.Use a ternary operator to check Even/Odd.
let c1 = 24;
let res2 = c1 % 2 === 0 ? "even" : "odd"
console.log(res2);

//11.use a ternary operator to find the larger number.
let res3 = a>b ? a : b
console.log(res3);

//12.Day finder using Switch Case
let find = 1;
switch(find){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Syntax")
}

//13.Month finder using Switch Case.
let month = (2)
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("December");
        break;
    case 3:
        console.log("April");
        break;
    case  4:
        console.log("march");
        break;
    default:
        console.log("Invalid")
        break;
}

//14.Login validation: username = "admin", password = "1234"
username = "Prashanth";
password = "Prash@1234";
if( username === "Prashanth" && password === "Prash@1234" ){
    console.log("Log in Sucessful");
}
else{
    console.log("Unsucessful");
}

//Mini Calculator using Switch:

let c12 = 490;
let c2 = 7;
let operator = "/"

switch(operator){
    case "+":
        console.log(c12+c2);
        break;
    case "-":
        console.log(c12-c2);
        break;
    case "*":
        console.log(c12*c2);
        break;
    case "/":
        if(c2 === 0){
            console.log("Cannot divide by zero");
        }
        else {
            console.log(c12/c2);
            break;
        }
    case "%":
        console.log(c1%c2);
        break;
    default:
        console.log("Type Error");
}

