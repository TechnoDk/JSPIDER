// console.log("30-09-2024");

// Array

// 1.Array Literals
// let arr1 = [10];

// 2.Array Constructor

// let arr2 = new Array(10);

// console.log(arr1);
// console.log(arr2);
// let arr1 = [];
// arr1[0] = 10;
// arr1[1] = 20;
// console.log(arr1);

// let arr2 = new Array(10);
// arr2[1] = 30;
// arr2[9] = 100;
// arr2[16] = 160;
// console.log(arr2);

//let arr = [10, 20, 30, 40, 50];
//console.log(arr.length - 1); // Length is property  not method

// Array Methods

// Push() = it is used to add in last in the array(insert at last index)
// let arr = [10, 20, 30, 40, 50];
// arr.push(600);
// console.log(arr);

// Pop() method (remove at last index) ,and returns it
// let poppedVal = arr.pop();
// console.log(poppedVal);
// arr.pop();
// console.log(arr);

// arr.shift()  remove first element then used it (Frontside) ,insert at 0th index
// arr.unshift() add first  element in the array then used it (frontside), Remove from 0th index and returns it

// arr.unshift("welcome");
// console.log(arr);

// let val = arr.shift();
// console.log(val);
// console.log(arr);

//! slice method(starting index, endind index) ending index always ignore so we take one more so right returns
// it extract a part from an array and returns it.it accepts two arguments start index and end index ,in which end index always gets ignored .
// it don't affect the original array
// let arr2 = [100, 200, 300, 400];
// let slicedArr = arr2.slice(1, 3);
// console.log(slicedArr);

//Splice()  method(start index,no of element u want to delete,element u want to add)
//accept three argument and affect the original array but slice accept two arguments
let arr3 = [120, 200, 123, 150, 400];
//let SplicedArr = arr3.splice(0, 1);
//arr3.splice(3, 0, 222); // add more element
arr3.splice(2, 0, "Thank you");
console.log(arr3); //[120, 200, 123, 222, 150, 400]

arr3.splice(2, 3); // Delete array element at particular element
console.log(arr3); //  [120, 200, 400]

let arr4 = [1, 2, 3, 4, 5, 6, 7];
let deepVar = arr4.splice(1, 5, 700, 300, 600, 800, 900, "Thank You"); // u want  add many no of element  as your wish
console.log(arr4);
console.log(deepVar);
