// console.log("hii");

//Promises : it is an object
// There are three states i.Pending , ii.fulfilled ,iii.Response

// let p1 = new Promise((resolve, reject) => {
//   if (10 > 2) {
//     //if (10 < 2) {
//     resolve("hello"); //if condition is true then resolve ,fulfilled return hello
//   } else {
//     reject("something went wrong"); //else reject and msg something went wrong
//   }
//   // resolve("hello");
//   // reject("something went wrong");
// });
// console.log(p1);
// Promise handle the used (then ,catch,finally)
//Example2
// let todos = [
//   {
//     ename: "Deepak4",
//     id: 24,
//     Loc: "Noida",
//   },
//   {
//     ename: "Deepak3",
//     id: 25,
//     Loc: "Noida",
//   },
//   {
//     ename: "Deepak2",
//     id: 26,
//     Loc: "Noida",
//   },
//   {
//     ename: "Deepak1",
//     id: 267,
//     Loc: "Noida",
//   },

//   {
//     ename: "suhana",
//     id: 24,
//     Loc: "Noida",
//   },
//   {
//     ename: "mastna",
//     id: 23,
//     Loc: "Noida",
//   },
//   {
//     ename: "asan",
//     id: 22,
//     Loc: "Noida",
//   },
//   {
//     ename: "ruhni",
//     id: 21,
//     Loc: "Noida",
//   },
//   {
//     ename: "chandan",
//     id: 20,
//     Loc: "Noida",
//   },
// ];
// let error = { message: " something went wrong" };

// let p1 = new Promise((resolve, reject) => {
//   // if (10<2){  else return

//   if (10 > 2) {
//     resolve(todos);
//   } else {
//     reject(error);
//   }
// });
// console.log(p1);
// if then execute after that  finally execute.
// only one method is also  execute
// p1.then((x) => {
//   console.log("got the data");
//   console.log(x);
//   x.map((ele) => {
//     console.log(ele.ename);
//     document.write(`
//       <section id="todoWrapper">
//       <h1>title : ${ele.ename}</h1>

//       </section>
//       `);
//   });
// });

// catch is execute after then finally  execute and return first catch and after that finally
// if you have stored array then take one variable under parenthsis just like X
// p1.catch((y) => {
//   console.log("ERROR");
//   console.log(y);
// });

// finally only pass msg without msg not executes
// finally with then or catch one is must otherwise not executed.
// p1.finally(() => {
//   console.log("HIII");
// });

// let fname = "deepak";
// let lneme = "kumar";
// console.log(fname + " " + lname);
//console.log(`${fname} ${lname}`); //string interpolation

// Date:-18-10-2024
// let data = {
//   id: 2,
//   ename: "chandan",
//   company: "Microsoft",
//   salary:1500000,
// };
// console.log(data);
// console.log(typeof data);

// let val = JSON.stringify(data);
// console.log(val);
// console.log(typeof val);

// let result = JSON.parse(val);
// console.log(result);
// console.log(typeof result);
// console.log(result.ename);
// for (x in result) {
//   console.log(result[x]);

// }

// let p1 = fetch("https://fakestoreapi.com/products");
// console.log(p1);
// console.log(typeof p1);

// p1.then((response) => {
//   console.log(response);
//   console.log(typeof response);

//   let p2 = response.json();
//   console.log(p2);
//   console.log(typeof p2);

//   p2.then((data) => {
//     console.log(data);
//     console.log(typeof data);
//   });
//   p2.catch((wentwrong) => {
//     console.log(wentwrong);
//   });
// });
// p1.catch((error) => {
//   console.log("error", error);
// });

// async function fetchProducts() {
//   let resp = await fetch("https://fakestoreapi.com/products");
//   let products = await resp.json();
//   console.log(products);

//   displayData(products);
// }
// fetchProducts();

// function displayData(allproducts) {
//   console.log(allproducts);
//   // allproducts.map((ele, i, ar) => {
//   // // console.log(ele.title);
//   allproducts.map((ele) => {
//     console.log(ele.title);
//     // document.write("<h1> hello</h1>");
//     document.write(`
//       <section id="item"><h1>${ele.title}</h1>
//       <p>price:${ele.price}</p>
//       <p> Description:${ele.description}</p>
//       <button> Buy Now</button>
//       </section>`);
//   });
// }

async function fetchdate() {
  let hello = await fetch("https://fakestoreapi.com/products");
  let heii = await hello.json();
  console.log(heii);

  displayDate(heii);
}
fetchdate();
function displayDate(allheii) {
  console.log(allheii);
  allheii.map((ele) => {
    console.log(ele.title);
    // document.write("<h1>hello world</h1>");
    // document.write(`<h1>${ele.title}</h1>`);
    document.write(`
      <section id="item" ><h1>${ele.title}</h1>
      <p>Price: ${ele.price}</p>
      <p> Description: ${ele.Description}</p>
      <button type="Submit"> Buy Now </button>
      </section> `);
  });
}
