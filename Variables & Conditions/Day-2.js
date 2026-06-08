//1.Circle Computations
let radius = 20;
let pie = 3.14;
let diameter = 2 * radius;
let circumfernce = 2 * pie * radius;
let area = 2 * radius * radius;
console.log("Diameter:", diameter.toFixed(2));
console.log("Circumfernce:", circumfernce.toFixed(2));
console.log("Area:", area.toFixed(2));

//2.Character to ASCII 

let ascii = 75;
let res = String.fromCharCode(ascii);
console.log("String:", res);    //differnce in number to op as string -> tring.fromCharCode contains capitals.


let string = "Prashanth";
let res2 = string.charCodeAt(8);
console.log("Numb:", res2);  // variablename.charCodeAt.

//3.Calculate Gross Salary

let input = 1000;
let dearness = input * 0.40;
let hra = input * 0.20
let res1 = input + dearness + hra;
console.log("result:", res1.toFixed(2));

//4.Attendance Sum
let a = 2;
let b = 4;
let sum = a + b;
let differnce = a - b;
console.log(sum, differnce);

//5.Simple Interset
let a1 = 2500;
let a2 = 2;
let a3 = 5;
let simpleinterset = a1 * a2 * a3 / 100;
console.log("SI:", simpleinterset);

//6.Area of Triangle
let b1 = 4;
let b2 = 5;
let b3 = 6;
let s = (b1 + b2 + b3) / 2;
let are = Math.sqrt(s * (s - b1) * (s - b2) * (s - b3));
console.log("Area:", are.toFixed(2));

//7.Triangle Validator 
let c1 = 4;
let c2 = 3;
let c3 = 2;
if (c1 + c2 > c3 && c1 + c3 > c2 && c3 + c2 > c1) {
    console.log("Yes");
}
else {
    cosnole.log("No");
}

//8.Seconds Conversion
let time = 27000;
let hours = time / 3600;
remain_time = time % 3600;
minutes = remain_time / 60;
seconds = remain_time % 60;
console.log(`${hours}:${minutes}:${seconds}`);

//9.Winning Percentage
const wins = 98;
const losses = 55;
const draws = 5;
const totalMatches = wins + losses + draws;
let winningPercentage = 0;
if (totalMatches > 0) {
    winningPercentage = (wins / totalMatches) * 100;
}
console.log(winningPercentage.toFixed(2));

//10.FizzBuzz
let n = 45;
if (n % 3 === 0 && n % 5 === 0) {
    console.log("FizzBuzz");
}
else if (n % 3 === 0) {
    console.log("Fizz")
}
else if (n % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log(n);
}

