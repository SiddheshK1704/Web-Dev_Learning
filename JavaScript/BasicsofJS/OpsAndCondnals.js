// Operators- perform operations


// Types- ARITHMETIC(binary(need two operands), unary(need one operand))
// arithmetic(binary)- +,-,*,/,%(remainder), **(exponent)
let a=10;
let b=5;
console.log(a**b);
// unary- ++- pre and post increment
//        -- pre and post decrement
// for example, ++a means that increment first and then use
// a++ means, use first and then increment
// same is the case with decrement as well.


// ASSIGNMENT OPERATORS(=,+=,-=,/=,*=)
// a=a+5 or a+=5


//  COMPARISON OPERATORS(==,>=,<=,>,<,!=)
console.log(1>5);
console.log('5' == 5); //loose equality
console.log('5' === 5); //strict  equality


// // TERNARY OPERATORS
// // condn? true(val1): false(val2)
let age=25
let status1=(age>18)?"I can vote":"I cannot vote";
console.log(status1);


// LOGICAL OPERATORS(AND &&, OR ||, NOT !)
let ans=(true&&true&&true);
console.log(ans);

let ans1=(false||false||true);
console.log(ans1);

let ans2=!(true);
console.log(ans2);

//WORKING WITH NON-BOOLEANS
// for example, (false && 'Siddhesh' siddhesh being the non boolean here)
// when using logical operators (&&,||,!) they only work with falsy or truthy values
//  falsey- undefined, null, 0, false, NaN(Not a Number),'' and truthy are not falsey.

// Short -Circuiting is when u know the outcome of a statement, lets say (f||t||f||f), so it will get the true value in the second only and then terminate returning the value as true.

console.log(false||7);


// BITWISE OPERATOR
// AND-&, OR-|, NOT-~, << LEFT SHIFT, >> RIGHT SHIFT, XOR-^
console.log(~(0));
// left shift- multiplied by 2
// right shift- divided by 2
console.log(10>>1);

//CONDITIONAL STATEMENTS
// IF ELSE
// if(condition){
// }
// else{}

let age1=19;
if(age1>18){
    console.log("Eligible to vote");
}
else{
    console.log("ineligible");
}

// can use only 'if' alone.
// if-else-if
// if(condn){--------------
// }
// else if(condn){--------------
// }
// multiple else ifs can be used
// else{}

let number=3;
if(number==1){
    console.log('A');
}
else if(number==2){
    console.log('B');
}
else if(number==3){
    console.log('C');
}
else{
    console.log('Invalid');
}

// nested if statements- if inside an if block or an else if block

// SWITCH CASES
// syntax: switch(expression){
// case_: statement 
//        break;
// case_: statement 
//        break;
// default: statement 
//        break;
// }

let number2=4;
switch(number2){
    case 1: console.log('A');
            break;
    case 2: console.log('B');
            break;
    case 3: console.log('C');
            break;
    case 4: console.log('D');
            break;
    default: console.log('Invalid');
}