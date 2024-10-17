// console.log("04-10-2024(Friday)");
console.log("hello");
let obj1 = {
  ename: "Deepak",
  id: 2,
  Loc: "Noida",
};
console.log(obj1);

// Objects Methods (obejct to array use three methods)
//1.0bject.keys() : (key in the form of array)
let keys = Object.keys(obj1);
console.log(keys);

//2.object.values() :(values in the form of array)
let values = Object.values(obj1);
console.log(values);

//3. object.entries() :(create every element from of array and return nested array)
let entries = Object.entries(obj1);
console.log(entries);

//object.fromentries(): (entries array  to object then use it)

let val = Object.fromEntries(entries);
console.log(val);
