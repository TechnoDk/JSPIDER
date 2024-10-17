// Object: -
// A JavaScript object is an entity having state and behavior (properties
// and method). For example:  car, pen, bike, chair, glass, keyboard,
// monitor etc.
// JavaScript is an object-based language. Everything is an object in
// JavaScript.
// Creating Objects in JavaScript:
// There are 2 ways to create objects.
// 1.By object literal.
// 2.By creating instance of Object directly (using new keyword).
// 1)JavaScript Object by object literal:
// The syntax of creating object using object literal is given below:
// VariableName object=

// {
// property1:value1,
// property2:value2,
// propertyN:valueN
// }

// Object literals

let obj1 = {
  ename: "Deepak",
  id: 2,
  Loc: "Noida",
};
console.log(obj1);
console.log(obj1.ename); //read
obj1.Loc = "Delhi"; //update
console.log(obj1);
obj1.age = 21;
console.log(obj1.age); //if key is not present then give undefined

// adding new key from object
obj1.sal = "100000";
console.log(obj1);

//deleting a key from object

delete obj1.Loc;
console.log(obj1);

console.log(" ******************************************************   ");

// object constructor

let obj2 = new Object({ ename: "deepak", id: 3, loc: "noida19" });
console.log(obj2);

console.log(obj2.ename); //read
obj2.loc = "Delhi"; //update
console.log(obj2);

// add a key from object
obj2.age = 21;
//console.log(obj2.age);

// delete key from object
delete obj2.loc;

console.log(obj2);
