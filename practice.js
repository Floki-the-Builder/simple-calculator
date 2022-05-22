/// Arrays
let myArray = [1, 2, 3, true, "ard"];

console.log(myArray);

let anotherArray = ["what is the meaning of life?", 42, false]
console.log(anotherArray[0]);

const number= [ 10, 20, 30, 40, 50]
console.log(number);

const months = ["jan", "feb", "march", "april", "may", "june"];
months[0] = "changed";
console.log(months);
// access to the values in array 
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);

// array dimention
console.log(number.length);

// methods foe arrays
number.push(60, 70);
console.log(number)
// 

// array methods ////////////////////////////////////
// .push()// moves values in array
// .table() // shoes index with value ncxt to it
// .unshift(); takes element in array 
// .pop(); // removes elements from array
// .shift(); // removes first element in array
// .unpop(); // removes last element in array
// .splice(); / remove positin , and amount of elements