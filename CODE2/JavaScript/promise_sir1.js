// // // // //      global variables
// // // // //      var a = 10;
// // // // //      let b = 20;
// // // // //      const c = 30;

// // // // //      for (let i = 0; i < 5; i++) {
// // // // //        console.log(a, b, c);  global variables

// // // // //        var x = 100;  it will act as global variable
// // // // //        let y = 200;  it will act as local
// // // // //        const z = 300;  it will act as local
// // // // //        console.log(x, y, z);
// // // // //      }

// // // // //      console.log("-----------", x);  possible bcoz, x is global

// // // // //      if (10 > 2) {
// // // // //        console.log(a, b, c);
// // // // //      }
// // // // //      function abc() {
// // // // //        console.log(a, b, c);  global variables
// // // // //        var m = "hello"; local
// // // // //        let n = "hii"; local
// // // // //        const o = "byee"; local
// // // // //        console.log(m, n, o);
// // // // //      }
// // // // //      abc();
// // // // //      console.log(m);  error , m is not defined bcoz m is local to abc function

// // // // //     ! NAMED FUNCTION

// // // // //      csk()
// // // // //      function csk() {
// // // // //        console.log("CSK");
// // // // //        console.log("Dhoni");
// // // // //        console.log("Raina");
// // // // //        console.log("Sameer");
// // // // //      }

// // // // //     ! ANONYMOUS FUNCTION
// // // // //      function () {
// // // // //          console.log("i am anonymous func");
// // // // //        };

// // // // //     ! FUNCTION EXPRESSION
// // // // //      console.log(x);

// // // // //      var x = function(){
// // // // //          console.log("welcome");
// // // // //      }
// // // // //      x()

// // // // //     ! PARAMETERIZED FUNC
// // // // //       parameter
// // // // //      function party(person) {
// // // // //        console.log("welcome " + person);
// // // // //      }
// // // // //      party("raj");  arguments
// // // // //      party("ram");
// // // // //      party("basab");

// // // // //      function add(n1, n2) {
// // // // //        console.log(n1 + n2);
// // // // //      }
// // // // //      add(10, 20);

// // // // //      function abc(n1) {
// // // // //        console.log(n1);
// // // // //        console.log(arguments);
// // // // //      }
// // // // //      abc(10, 20, 30, 405, 50);

// // // // //      ! RETURN TYPE FUNCTION
// // // // //      function addition(n1, n2) {
// // // // //        return n1 + n2;
// // // // //      }
// // // // //      let val = addition(10, 20);
// // // // //      console.log(val);

// // // // //      ! HOF AND CALLBACK FUNCTION
// // // // //      function sum(n1, n2) {
// // // // //        console.log(n1 + n2);
// // // // //      }

// // // // //      function calculate(a, b, fun) {
// // // // //        fun(a, b);
// // // // //      }
// // // // //      calculate(10, 20, sum);

// // // // //     ! GEC WITH FUNCTIONS
// // // // //     ? example 1
// // // // //      debugger;
// // // // //      console.log("start");
// // // // //      var a;
// // // // //      function display(username) {
// // // // //        console.log(username);
// // // // //      }
// // // // //      a=10
// // // // //      console.log(a);
// // // // //      var b;
// // // // //      console.log(b);
// // // // //      display("john")
// // // // //      b=30

// // // // //      console.log("start");
// // // // //      var a = 10;
// // // // //      let b = 20;
// // // // //      const c = 30;
// // // // //      function data() {
// // // // //        var sub1 = "html";
// // // // //        let sub2 = "css";
// // // // //        const sub3 = "js";
// // // // //        console.log(sub1, sub2, sub3);
// // // // //        console.log(a, b, c);
// // // // //      }
// // // // //      console.log("hii");
// // // // //      data();

// // // // //     ? example 2
// // // // //      console.log("start");
// // // // //      function fun1() {
// // // // //        var a = 10;
// // // // //        let b = 20;
// // // // //        const c = 30;
// // // // //        console.log(a, b, c);
// // // // //      }
// // // // //      fun1();
// // // // //      function fun2() {
// // // // //        var x = 100;
// // // // //        let y = 200;
// // // // //        const z = 300;
// // // // //        console.log(x,y,z);
// // // // //      }
// // // // //      fun2()

// // // // //      ! NESTED FUNCTION
// // // // //      debugger;
// // // // //      function parent() {
// // // // //        let money = 500000;
// // // // //        console.log(money);

// // // // //        function child() {
// // // // //          let savings = 500;
// // // // //          console.log(savings+money);
// // // // //        }
// // // // //        return child;
// // // // //      }
// // // // //      let fun  = parent();
// // // // //      console.log(fun);
// // // // //      fun()

// // // // //      debugger;
// // // // //      function parent() {
// // // // //        let money = 500000;
// // // // //        console.log(money);

// // // // //        function child() {
// // // // //          let savings = 500;
// // // // //          console.log(savings+money);
// // // // //        }
// // // // //        return child;
// // // // //      }
// // // // //      parent()() js currying
// // // // //     ? when a parent func is returing one child func and if you want to call that func without storing it into a varaible then use one more parenthesis this process in known as js currying

// // // // //     ! IIFE
// // // // //      (function () {
// // // // //        console.log("I am IIFE");
// // // // //      })();

// // // // //      (function () {
// // // // //        console.log("i am IIFE 2");
// // // // //      })();

// // // // //      function father() {
// // // // //        var x = "hello";
// // // // //        console.log(x);

// // // // //        function son() {
// // // // //          var x = "byee";
// // // // //          console.log(x);
// // // // //        }
// // // // //        son();
// // // // //        console.log(x);
// // // // //      }
// // // // //      father();

// // // // //      function Qsp() {
// // // // //        var course1 = "Java";
// // // // //        let course2 = "Mern";
// // // // //        const course3 = "Testing";
// // // // //        console.log(course1, course2, course3);

// // // // //        function trainer(name) {
// // // // //          console.log(name, course2);
// // // // //        }
// // // // //        return trainer;
// // // // //      }
// // // // //      Qsp()("prasad");

// // // // //     ! ARROW FUNCTION

// // // // //     let x = () => {
// // // // //       console.log("i am arrow function");
// // // // //     };
// // // // //     x();

// // // // //      way 1
// // // // //     let a = (_) => {
// // // // //       console.log("way 1");
// // // // //     };
// // // // //     a();

// // // // //      way 2
// // // // //     let b = (n1) => console.log("way 2", n1);
// // // // //     b(10);

// // // // //      explicit return
// // // // //     let c = () => {
// // // // //       return "explicit";
// // // // //     };
// // // // //     console.log(c());

// // // // //      implicit return
// // // // //     let d = () => "implicit";
// // // // //     console.log(d());

// // // // //     let val = (() => {
// // // // //       console.log("arrow iife");
// // // // //       return 10
// // // // //     })();
// // // // //     console.log(val);

// // // // //     ! ARRAYS
// // // // //     2 WAYS:
// // // // //    ? 1) ARRAY LITERALS
// // // // //     let arr1 = [10]

// // // // //     ? 2) ARRAY CONSTRUCTOR
// // // // //     let arr2 = new Array(10)

// // // // //     console.log(arr1);
// // // // //     console.log(arr2);

// // // // //     let arr1 = [];
// // // // //     arr1[0] = 10;
// // // // //     arr1[1] = 20;
// // // // //     console.log(arr1);

// // // // //     let arr2 = new Array(10);
// // // // //     arr2[2] = 30;
// // // // //     arr2[9] = 100;
// // // // //     console.log(arr2);

// // // // //    let arr = [10, 20, 30];
// // // // //    console.log(arr);

// // // // //     push(): adds element at the end
// // // // //    arr.push("hello");
// // // // //    console.log(arr);

// // // // //     pop(): removes element from the end and returns it
// // // // //    let popedVal = arr.pop();
// // // // //    console.log(popedVal);
// // // // //    console.log(arr);

// // // // //     unshift(): add elements at 0th index
// // // // //    arr.unshift("Welcome");
// // // // //    console.log(arr);

// // // // //     shift(): remove elemnent from 0th index and returns it
// // // // //    let val = arr.shift();
// // // // //    console.log(val);
// // // // //    console.log(arr);

// // // // //     slice(start index, end index): it extract a part from an array and returns it.It accepts two arguements start index and end index, in which end index always gets ignored
// // // // //    ! it do not affect the original array
// // // // //    let arr2 = [100, 200, 300, 400];
// // // // //    let slicedArr = arr2.slice(1, 3);
// // // // //    console.log(slicedArr);
// // // // //    console.log(arr2);

// // // // //     splice(start index,no of element u want to delete,element u want to add)
// // // // //    let arr3 = [100, 200, 300];
// // // // //    arr3.splice(2, 0, "Hello world");
// // // // //    console.log(arr3);

// // // // //    let arr4 = [1,2,3,4,5,6,7]
// // // // //    arr4.splice(1,5,700,300,500,600)
// // // // //    console.log(arr4);

// // // // //    let arr5 = [10,20,30,40,50]
// // // // //    let returnVal = arr5.splice(1,0,300)
// // // // //    console.log(arr5);
// // // // //    console.log(returnVal);

// // // // //    indexOf(): it accepts array element and returns it index value. if element is not present it returns -1
// // // // //   let arr6 = [10, 20, 30, 40, 50];
// // // // //   console.log(arr6.indexOf(40));  3
// // // // //   console.log(arr6.indexOf(100));  -1

// // // // //    includes(): it checks wheather the element is present in an array or not,if it is present it returns true else false
// // // // //   console.log(arr6.includes(50)); true
// // // // //   console.log(arr6.includes(100)); false

// // // // //    at(): it accepts index value as an arguement and returns the element of that index value. if index is not available it returns undefined. it accepts -ve index
// // // // //   console.log(arr6.at(3)); 40
// // // // //   console.log(arr6.at(6)); ud
// // // // //   console.log(arr6.at(-5));  10

// // // // //    concat(): to concat two or more arrays and returns a single array
// // // // //   let a1 = [10, 20, 30];
// // // // //   let a2 = [40, 50, 60];
// // // // //   console.log(a1.concat(a2));
// // // // //   console.log(a1.concat(a2, a1));
// // // // //   console.log(a2.concat(a1, a1));

// // // // //    toString(): its converts array into string and returns it
// // // // //   let arr = [10, 20, 30];
// // // // //   console.log(arr.toString());  10,20,30

// // // // //    join(): it converts array into string and returns it. it accepts seperator as an arguement
// // // // //   let arr1 = [10, 20, 30];
// // // // //   console.log(arr1.join(" "));

// // // // //    reverse(): it reverse an array and returns it
// // // // //   let arr2 = [10, 3, 50, 5000];
// // // // //   console.log(arr2.reverse());

// // // // //  let arr = [10, 20, 30, 40, 50];
// // // // //   for (let i = 0; i <= arr.length - 1; i++) {
// // // // //     console.log(arr[i]);
// // // // //   }

// // // // //   forEach(): it is a higher order function which accepts callback func. it is used to  iterate an array.callback func accepts 3 parameter. we cannot return anything
// // // // //  ! SYNTAX -> arr.forEach((element,index,array)=>{})
// // // // //  let arr = [10, 20, 30, 40, 50];
// // // // //  let val1 = arr.forEach((ele, i, array) => {
// // // // //    console.log(ele, i, array);
// // // // //    return "i am forEach";
// // // // //  });
// // // // //  console.log(val1);//ud

// // // // //   map(): it is a higher order function which accepts callback func. it is used to  iterate an array.callback func accepts 3 parameter. it returns a new array
// // // // //  ! SYNTAX -> arr.map((element,index,array)=>{})
// // // // //  let arr = [10, 20, 30, 40, 50];
// // // // //   let val2 = arr.map((ele, i, array) => {
// // // // //    console.log(ele, i, array);
// // // // //    return "i am map";
// // // // //  });
// // // // //  console.log(val2);

// // // // // let arr = [10, 20, 30, 40, 50, 40, 30, 50];
// // // // // let filteredVal = arr.filter((ele, i, array) => {
// // // // //   console.log(ele, i, array);
// // // // //   return ele === 30;
// // // // // });
// // // // // console.log(filteredVal);

// // // // // let arr = [10, 20, 30, 40, 50, 40, 30, 50];
// // // // //  let val = arr.find((ele, i, array) => {
// // // // //    console.log(ele, i, array);
// // // // //    return ele === 30;
// // // // //  });
// // // // //  console.log(val);

// // // // // let arr = [10, 20, 30, 40, 50];
// // // // // let val = arr.reduce((acc, ele) => {
// // // // //   console.log(acc, ele);
// // // // //   return acc + ele;
// // // // // });
// // // // // console.log(val);

// // // // // ! OBJECTS

// // // // //? OBJECT LITERALS
// // // // // create
// // // // let obj1 = {
// // // //   ename: "Sarvesh",
// // // //   id: 1,
// // // //   company: "Jsp",
// // // //   location: "Noida",
// // // // };
// // // // console.log(obj1);
// // // // console.log(obj1.ename); // read

// // // // obj1.location = "Bangalore"; // update
// // // // console.log(obj1);

// // // // // if key is not present
// // // // console.log(obj1.age); //ud

// // // // // adding new key
// // // // obj1.salary = 10000;
// // // // console.log(obj1);

// // // // // deleting a key
// // // // delete obj1.id;
// // // // console.log(obj1);

// // // // // ? OBJECT CONSTRUCTOR
// // // // // let obj2 = new Object({
// // // // //   ename: "Prasad",
// // // // //   id: 2,
// // // // //   company: "JSP",
// // // // //   location: "Pune",
// // // // // });
// // // // // console.log(obj2);

// // // let obj3 = {
// // //   ename: "abc",
// // //   id: 1,
// // //   age: 27,
// // // };
// // // // console.log(obj3.ename);
// // // // let val="ename"
// // // // console.log(obj3[val]);

// // // for (let x in obj3) {
// // //   // console.log(obj3.x); //! not possible
// // //   console.log(obj3[x]);
// // // }

// // // // let arr = [10, 20, 30];
// // // // //  for in
// // // // for (let x in arr) {
// // // //   console.log(typeof x);
// // // // }
// // // // //  for of
// // // // for (let x of arr) {
// // // //   console.log(x);
// // // // }

// // let obj = {
// //   id: 1,
// //   ename: "Raj",
// //   company: "TCS",
// //   designation: "developer",
// // };
// // console.log(obj);
// // //! OBJECT METHODS
// // // Object.keys()
// // let keys = Object.keys(obj)
// // console.log(keys);// ['id', 'ename', 'company', 'designation']

// // // Object.values()
// // let values = Object.values(obj)
// // console.log(values);// [1, 'Raj', 'TCS', 'developer']

// // // Object.entries()
// // let entries = Object.entries(obj)
// // console.log(entries);// [Array(2), Array(2), Array(2), Array(2)]

// // // Object.fromEntries()
// // let val = Object.fromEntries(entries)
// // console.log(val);// {id: 1, ename: 'Raj', company: 'TCS', designation: 'developer'}

// // let x = fetch("https://api.github.com/users")
// // console.log(x);

// //! PROMISE
// // let p1 = new Promise((resolve, reject) => {
// //   if (10 < 2) {
// //     resolve("Hello");
// //   } else {
// //     reject("Something went wrong");
// //   }
// // });
// // console.log(p1);

// //! EXAMPLE 2
// let todos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 7,
//     title: "illo expedita consequatur quia in",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 8,
//     title: "quo adipisci enim quam ut ab",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 9,
//     title: "molestiae perspiciatis ipsa",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 10,
//     title: "illo est ratione doloremque quia maiores aut",
//     completed: true,
//   },
// ];
// let error = { message: "something went wrong" };

// let p1 = new Promise((resolve, reject) => {
//   if (10 > 2) {
//     resolve(todos);
//   } else {
//     reject(error);
//   }
// });
// console.log(p1);

// p1.then((x) => {
//   console.log("got the data");
//   console.log(x);
//   x.map((ele) => {
//     console.log(ele.title);
//     document.write(`
//       <section id="todoWrapper">
//       <h1>title : ${ele.title}</h1>
//       <img src=${ele.image}>
//       </section>
//       `);
//   });
// });

// p1.catch((y) => {
//   console.log("error");
//   console.log(y);
// });
// let fname = "raj";
// let lname = "kapoor";
// console.log(fname + " " + lname);
// console.log(`${fname} ${lname}`);//string interpolation

// dated - 07-10-2024(MONDAY)

//JSON : JAVASCRIPT OBJECT NOTATION (IT'S KEY STRING TYPE)
// JS is the form of object and key is the directly access use of function dot(.)and key name
//
// let data = {
//   id: 10,
//   ename: "deepak",
//   company: "Stank",
// };
// console.log(data);

//JSON.STRINGIFY() : CONVERT JS OBJECTS TO JSON AND RETURNS IT

// let jsonData = JSON.stringify(data);
// console.log(jsonData);

// JSON.PARSE(): converts json to js object and return it

// let val = JSON.parse(jsonData);
// console.log(val);

// FETCH(): json to js and reurn promise form
// let p1 = fetch("https://fakestoreapi.com/products");
// console.log(p1);

// p1.then((response) => {
//   console.log(response); //response object from server
//   let p2 = response.json(); //json() converts json data to js and returns in a promise
//   console.log(p2);
//   p2.then((response) => {
//     console.log(response);
//   });
//   p2.catch((err) => {
//     console.log(err);
//   });
// });

//ASYNC AND AWAIT
async function fetchData() {
  let resp = await fetch("https://fakestoreapi.com/products");
  let products = await resp.json();
  console.log(products);
  displayData(products);
}
fetchData();

function displayData(allproducts) {
  console.log(allproducts);
  allproducts.map((product) => {
    document.write(`<h1>${product.title}</h1>`);
  });
}
//Call back hell what do you mean by callBack Hell ?
