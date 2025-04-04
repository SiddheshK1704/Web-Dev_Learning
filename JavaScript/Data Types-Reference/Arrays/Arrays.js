//  Arrays are a collection of items 
//  arrays are lists which have items

//  Syntax:
// using []
// array constructor

// let arr=[1,2,3,4,5];
// let arr1= [1,'love',true,()];

// creation of arrays
let arr = [1,2,3,4,5];
console.log(arr);

// using array constructor
let brr= new Array(1,'Love',true);
console.log(brr);

console.log(typeof(arr));
console.log(typeof(brr)); // says object

// arrays are objects which have contigous memory allocation or locations for each element.
// to access the elements of an array we use index.

console.log(brr[1]);

// Built-in methods of arrays in JS:
// 1. push() - adds an element to the last of the array 9in the last index)
brr.push('Babbar');
// 2. pop() -  removes the last element of the array

// brr.pop();

// shift() - removes the first element of the array (LEFT MOST SIDE)
// similarly, unshift() adds a new element to the 0th index.

// slice() - similar to sliciing a list in python, this is used to slice a part out of the array
brr.push(20);
brr.push(30);
brr.push(40);
console.log(brr);

// now, 
console.log(brr.slice(2,4)); // from index 2 to 4. Excludes 4th index

// splice() method - used to modify the array (insert, replace, remove)
brr.splice(1,2,'Kunal');
console.log(brr);

// map() - used to map a function to an iterable or an array.
let arr1=[10,20,30];
let ansArray=arr1.map((number)=>{
    return number**2;
})
console.log(ansArray);

// filter
// filter() - used to filter out the elements of an array based on a condition
let arr2=[10,20,30,11,21,44,51];
let evenarr2=arr2.filter((number)=>{
    if(number%2 == 0 ){
        return true;
    }
    else{
        return false;
    }
    // could have written return number%2==0;
})
console.log(evenarr2);

// reduce() - 
// hass accumulator and current value. if the acc is not initialised by the user, it takes the first value.
// now if the acc has been ini, curr value takes the 1st element. if it has not been ini, then acc takes the 1st elem and curr value takes the 2nd element.

let arr3=[1,2,3,4];
let ans = arr.reduce((acc,curr)=>{
    return acc + curr;
},0); // 0 is the acc value
console.log(ans);


// sorting
let arr4 = [7,4,6,3,6,7,8,2,1,4,6,7];
arr4.sort();
console.log(arr4); //sorts the array in ascending order

// indexof
console.log(arr4.indexOf(6)); //gives the index of the element
