// console.log("01-10-2024");

// indexof() : it accepts array element and returns it index
//value . if element is not present it returns -1
// let arr6 = [10, 20, 30, 40, 50];
// console.log(arr6.indexOf(40)); //3
// console.log(arr6.indexOf(100)); //-1

// includes(): it checks wheather the element is present
// in an array or not ,if it is present it returns true else false

// console.log(arr6.includes(50)); // true
// console.log(arr6.includes(100)); // false

// at() method : it accepts index value as an argument and returns the element of that index value
// if index is not available it returns undefined
// console.log(arr6.at(3)); //40
// console.log(arr6.at(6)); // undefined

// it accepts -ve index
// console.log(arr6.at(-5)); //10

//Concat() method: To concat two or more array and returns a single array

// let a1 = [10, 20, 30];
// let a2 = [405, 50, 60];
// console.log(a1.concat(a2)); //[10,20,30,40,50,60]
// console.log(a1.concat(a2, a1));
// console.log(a2.concat(a1, a1));

//toString() Method : It converts array into string  and returns it
// let arr = [10, "hello", 50];
// console.log(arr.toString()); // 10,hello,50

//Join() : it converts array into string and returns it.
// it accepts seperator as an argument
// let arr3 = [10, 20, 30];
// console.log(arr3.join()); //10,20,30
// console.log(arr3.join("+"));

// reverse() : to reverse an array and returns it

// let arr2 = [10, 20, 30, 40, 50, 60];
// console.log(arr2.reverse()); // [60, 50, 40, 30, 20, 10]

// Advanced array methods

//1. forEach()
//2. map()
//3. filter()
//4.find()
//5. reduce()

//1. forEach() : it is a higher order function which accepts
//callback func. it is used to iterate an array
// callback func accepts 3 parameter and we can not return anything
//Syntax -> arr.forEach((element,index,array)=>{})

let arr = [10, 20, 30, 40, 50];
// for (let i=0 ;i<=arr.length-1;i++){
// console.log(arr[i]);}

//
arr.forEach(function (x, y, z) {
  console.log(x, y, z);
});

arr.forEach((ele, i, array) => {
  console.log(ele, i, array);
});

//2. map():
// it is a higher order function which accepts
//callback func. it is used to iterate an array
// callback func accepts 3 parameter and it  returns a new array
//Syntax -> arr.forEach((element,index,array)=>{})

let var2 = arr.map((ele, i, array) => {
  console.log(ele, i, array);
  return "i am map";
});
console.log(var2); // it returns boolean value

//filter():

let arr8 = [1, 20, 30, 40, 40, 50, 60];
let filterval = arr8.filter((ele, i, array) => {
  console.log(ele, i, array);
  return ele > 30; // it returns multiple value and check all element
});
console.log(filterval); // it returns the element which satisfied the condition

// find(): it returns the element which satisfied the condition.

let val = arr.find((ele, i, array) => {
  console.log(ele, i, array);
  return ele === 40;
});
console.log(val); // find one which one first come

// reduce():
