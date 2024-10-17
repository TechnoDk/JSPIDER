// console.log("Hi good afternoon (24-09-2024)");

// function party(hero) {
//   console.log("Hello Dost" + hero);
// }
// party("deepak");
// function sum(n1, n2) {
//   console.log(n1 + n2);

//   console.log(arguments);
// }
// sum(10, 20);

function sum(n, n1) {
  return n + n1;
}
function calculate(a, b, fun) {
  console.log(a + b + fun);
}
calculate(10, 20, sum(10, 40));
