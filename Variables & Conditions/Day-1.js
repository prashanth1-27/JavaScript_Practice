// Topics: Variables , Data Types , Operators and conditions //

//1.Print your name using a variable.
let name="Prashanth";
console.log(name);

//2.Store your age and print it.
let age=21;
console.log(age);

//3.Add two numbers.
let a=1401;
let b= 2712;
console.log(a+b);

//4.Subtract two numbers,Multiply two numbers,Divide two numbers.
let c=27;
let d=14;
let sub = c-d;
let mul = c*d;
let div = c/d;
console.log(sub);
console.log(mul);
console.log(div.toFixed(2)); // for deciamls we use toFixed(...) to print the decimal points.

//5.Find the remainder using %.
let divisior = 2
let e= 100;
let divi=e%divisior;
console.log(divi)

//6.Check whether a number is Even or Odd.
let num = 14;
if (num % 2 === 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

//7.Check whether a number is Positive or Negative.
/*let numb = 10;
if(numb === 10){
    console.log("Positive");
}
else{
    console.log("negative");
} */

let numb = 100;
if (numb >=0){
    console.log("Positive")
}
else{
    console.log("Negative")
}


//8.Find the datatype of: Number,String,Boolean

console.log(typeof(name));
console.log(typeof(num));
bool=true;
console.log(typeof(bool));

//9.Swap two numbers using a third variable.
let aa = 2;
let bb = 4;
let temp = aa;
aa = bb;
bb = temp;
console.log(aa,bb);

//10.Swap two numbers without using a third variable.
let f = 4;
let g = 2;
f = f + g;
g = f - g;
f = f - g;
console.log(f,g);

//11.Convert "100" into a Number.
let st="100";
let numbe = Number(st);
console.log(numbe);

//12.Convert 100 into a String.
let hun = 100;
let str = String(hun);
console.log("sring =",str);

//13.Print the square of a number.

let sq = 4;
let s = 2;
console.log("answer:",sq**s);

