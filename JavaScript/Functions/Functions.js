// FUNCTIONS - performs specific tasks.
// ARE USED TO MAKE THE CODE MAINTAINABLE, EASY TO DEBUG AND IMPROVE READABILITY AND REUSABILITY

// Syntax:
// function function_name(Parameters){
// block of code / task
// }
// function_name(parameter); this is a function call

function sayMyName(){ //definition
    console.log("Siddhesh");
}
sayMyName(); // call

// function printCounting(){
//     for(let i=1; i<=100; i++){
//         console.log(i);
//     }
// }
// printCounting();
console.log("\n");

// function with parameter
function PrintingNum(num){// no need to specify datatype
    console.log("Printing Number:",num);
}
PrintingNum(17);
console.log("\n");

function getAvg(num1,num2){
    let avg=(num1+num2)/2;
    console.log("Average of these numbers is:", avg);
}
getAvg(10,20);
console.log("\n");

// return function- a function which returns something
function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let ans=getSum(1,2,3);
console.log("Printing Sum: ",ans);
console.log("\n");

function getMyName(fname,lname){
    let fullname=fname+" "+lname;
    return fullname;
    // unreachable statements- statements that will never run because they are under the return statement.
}
let fullname=getMyName("Siddhesh","Khankhoje");
console.log("Your name is: ",fullname);
console.log("\n");