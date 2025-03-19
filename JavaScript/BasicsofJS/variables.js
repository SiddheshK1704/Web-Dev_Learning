// we can create variables in JS in three ways:
// var, let and const. Although var is not used nowadays.


// var age=25; global scope

// if(true){
//    console.log(age); //prints 25 when u type node filename.js in terminal.
// }

// function solve(){
//     var age=19; //local scope
//     console.log(age);//used to print
// }

//function call 
// solve();

//var is not used because globally scoped variables can rise issues in debugging
//also, while using var and creating a variable, we cannot re-declare it.


//let keyword- block scoped (cannot be accessed out of a code block)
// {
//     let a=10; // throws error
// }

// console.log(a);

// let a=30;// can manipulate like a=30, but not re-declare let a=30.

// dynamically typed


// const //used to create constant variables.( cannot be changed)

// const b=20;
// console.log(b);


// ACCORDING to the convention,
// can start the name of the variable using a symbol or a nmber.
// no space
// camel case- every new word first initial needs to be capital. (for ex:basicsOfJs)
// should be meaningful
// dont use reserved keywords.


// DATATYPES- PRIMITIVE AND NON-PRIMITIVE

// PRIMITIVE- number, string, boolean, undefined, null, big Int, symbol


//number- 1,2,23,3.14
//string- sequence of characters ("Siddhesh")
//boolean- true or false
//undefined- not defined,

let marks=20.345;
marks="Siddhesh"; // dynamically typed
console.log(marks);

let undefmarks;// never defined
console.log(undefmarks);

let value=null;
console.log(value);

// big Int- from -(2^53-1) to (2^53-1)

let bigIntexample=983729857409789587686758907364258976248650289736350876243058418546757816456120436571874658017624305876415;
console.log(bigIntexample);

marks=false;
console.log(typeof(marks));
