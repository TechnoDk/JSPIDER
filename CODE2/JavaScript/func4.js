// global variables
// var a = 10;
// let b = 20;
// const c = 30;

// for (let i = 0; i < 5; i++) {
//   console.log(a, b, c); // global variables

//   var x = 100; // it will act as global variable
//   let y = 200; // it will act as local
//   const z = 300; // it will act as local
//   console.log(x, y, z);
// }

// console.log("-----------", x); // possible bcoz, x is global

// if (10 > 2) {
//   console.log(a, b, c);
// }
// function abc() {
//   console.log(a, b, c); // global variables
//   var m = "hello"; //local
//   let n = "hii"; //local
//   const o = "byee"; //local
//   console.log(m, n, o);
// }
// abc();
// console.log(m); // error , m is not defined bcoz m is local to abc function

//! NAMED FUNCTION

// csk()
// function csk() {
//   console.log("CSK");
//   console.log("Dhoni");
//   console.log("Raina");
//   console.log("Sameer");
// }

//! ANONYMOUS FUNCTION
// function () {
//     console.log("i am anonymous func");
//   };

//! FUNCTION EXPRESSION
// console.log(x);//

// var x = function(){
//     console.log("welcome");
// }
// x()

//! PARAMETERIZED FUNC
// // parameter
// function party(person) {
//   console.log("welcome " + person);
// }
// party("raj"); // arguments
// party("ram");
// party("basab");

// function add(n1, n2) {
//   console.log(n1 + n2);
// }
// add(10, 20);

// function abc(n1) {
//   console.log(n1);
//   console.log(arguments);
// }
// abc(10, 20, 30, 405, 50);

// ! RETURN TYPE FUNCTION
// function addition(n1, n2) {
//   return n1 + n2;
// }
// let val = addition(10, 20);
// console.log(val);

// ! HOF AND CALLBACK FUNCTION
// function sum(n1, n2) {
//   console.log(n1 + n2);
// }

// function calculate(a, b, fun) {
//   fun(a, b);
// }
// calculate(10, 20, sum);

////! GEC WITH FUNCTIONS
////? example 1
// debugger;
// console.log("start");
// var a;
// function display(username) {
//   console.log(username);
// }
// a=10
// console.log(a);
// var b;
// console.log(b);
// display("john")
// b=30

// console.log("start");
// var a = 10;
// let b = 20;
// const c = 30;
// function data() {
//   var sub1 = "html";
//   let sub2 = "css";
//   const sub3 = "js";
//   console.log(sub1, sub2, sub3);
//   console.log(a, b, c);
// }
// console.log("hii");
// data();

////? example 2
// console.log("start");
// function fun1() {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a, b, c);
// }
// fun1();
// function fun2() {
//   var x = 100;
//   let y = 200;
//   const z = 300;
//   console.log(x,y,z);
// }
// fun2()
//date 26-09-2024
// ! NESTED FUNCTION
// debugger;
// function parent() {
//   let money = 500000;
//   console.log(money);

//   function child() {
//     let savings = 500;
//     console.log(savings+money);
//   }
//   return child;
// }
// let fun  = parent();
// console.log(fun);
// fun()

//debugger;
function parent() {
  let money = 500000;
  console.log(money);

  function child() {
    let savings = 500;
    console.log(savings + money);
  }
  return child;
}
parent()(); // js currying
//? when a parent func is returing one child func and if you want to call that func without storing it into a varaible then use one more parenthesis this process in known as js currying

//! IIFE
// (function () {
//   console.log("I am IIFE");
// })();

// (function () {
//   console.log("i am IIFE 2");
// })();
