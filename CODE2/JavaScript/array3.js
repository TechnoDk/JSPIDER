// console.log("30-09-2024");
// reduce() method ;
//Reduce() : the reduce() is a HOF which will return a single value from the
//original array. if no initial value is given, the accumulator will be assigned
//with the first value of the array
//  SYNTAX:-
//arr.reduce((acc,ele,index,arr)=>{
//statements
//},init)

// let arr = [10, 20, 30, 40, 50];
// let val = arr.reduce((acc, ele, index, arr) => {
//   console.log(acc, ele, index, arr);
//   return acc + ele;
// });
//console.log("150 rupe dega " + val);

let arr = [10, 20, 30, 40, 50];
let val = arr.reduce((acc, ele) => {
  console.log(acc, ele);
  return acc + ele;
}, 500);
console.log("Return value " + val); //650 return
