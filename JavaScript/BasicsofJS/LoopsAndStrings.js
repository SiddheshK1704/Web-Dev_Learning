// LOOPS- used for iterations. To make the code maintainable, and less bulky. 
// for, while, do while
// js has for in, for each, for of loops

// FOR LOOP
// Syntax:
// for(initialization, condition, updation(increment/decrement)){
// body
// }

for(let i=1;i<=10;i++){
    console.log("Siddhesh is Learning JavaScript");
}

for(let i=1;i<6;i++){ //can write less than equal to 5 as well (i<=5)
    console.log(i);
}

//reverse counting
for(let i=10;i>=0;i--){
    console.log(i);
}
console.log("\n");
// using break statement
for(let i=1;i<=6;i++){
    if (i==4) {
        break;
    }
    else {
        console.log(i);
    }
}
console.log("\n");
// using continue statement
for(let i=1;i<=5;i++){
    if(i==4){
        continue;
    }
    else{
        console.log(i);
    }
}
console.log("\n");


// WHILE LOOP Syntax:
// initialisation
// while(condn){
// body
// updation(increment/decrement)
// }

let i=1;
while(i<=10){
    console.log("Siddhesh-Whileloop");
    i++;
}
console.log("\n");
let a=1;
while(a<6){
    console.log(a);
    a++;
}
console.log("\n");
// reverse numbers
let b=5;
while(b>0){
    console.log(b);
    b--;
}
console.log("\n");

let c=1;
while(c<5){
    if(i==3){continue;}
    else{
        console.log("Hi");
    }
    c++;
}
console.log("\n");

// DO WHILE LOOP
// Syntax:
// initialise
// do{
// body
// updation
// }while(condn);
// EX:
let d=1;
do{
    console.log(d);
    d++;
}while(d<6);
console.log("\n");


// STRINGS - Sequence of Characters (can be inside " ", or ' ')
let firstname="Siddhesh";
let Lastname="Khankhoje";
// IF WE WANT A STRING THAT CAN BE WRITTEN IN MULTIPLE LINES, WE USE THE BACK TICKS(` `).
// EX:
let fname=`Dominic
Thomas`;
console.log(fname);
// CAN BE VERY HELPFUL
let secname=new String("Siddhesh Khankhoje");
console.log(secname);

let op1="Siddhesh ";
let op2="Khankhoje ";

let ans = op1 + op2; // concatenation
console.log(ans);

let FinalAns=`op1 + op2` // this will print op1 + op2. 
console.log(FinalAns);

// but, if we use ${op1}+${op2}, then it prints the string or values in op1, and op2.
let FinalAns2=`${op1} ${op2}`;
console.log(FinalAns2);

console.log(op2.length); // to find length of string.

// uppercase or lowercase
console.log(op1.toUpperCase());
console.log(op2.toLowerCase());

// taking subpart of a string(character array)
let str="Siddhesh";
console.log(str.substring(2)); // from 2 to end
// can specify the range as well
console.log(str.substring(2,4));// does not include the last chracter in the given range.

// Split method
let sentence="Hello guys how are you ?";
let words= sentence.split(' ');
console.log(words); // gives an array.

// want to print a string that has double inverted commas in it, use back slash
// for ex: Hello guys \"how\" are you ?

// join method joins the array using whatever character we specify.
let jwords=words.join(',');
console.log(jwords);