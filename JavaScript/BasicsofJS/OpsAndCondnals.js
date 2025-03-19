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