// console.log("React ");
// Destructuring  E.g.,1
let arr = [10, 20, 30, 40, 50];
let [a, b, c, d] = arr;
console.log(a);
console.log(b);

let arr1 = [20, 30, 40, 50, 60];
let [, p, , w, ,] = arr1;
console.log(p, w);

let arr3 = [10, ["hello", [30, [67, "hii"], ["Bye"]], 90]];
let [, [n, [, [, x], [z]]]] = arr3;
console.log(n, x, z);

// let obj1 = {
//   id: 18745,
//   title: "Laptop",
//   brand: "ASUS",
//   price: 90000,
// };
// let { title,id,price } = obj1;
// console.log(title ,id,price);
let obj1 = {
  id: 18745,
  title: "Laptop",
  brand: "ASUS",
    price: 90000,
    model: {
        rating: 5,

        
      },
};
let { title,id,price,model:{rating} } = obj1;
console.log(title ,id,price,rating);