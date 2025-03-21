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