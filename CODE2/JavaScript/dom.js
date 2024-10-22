// document.write("21-10-2024(Monday");
// DOM:-Document object model which is visual representaion of html element
console.log("hello world");

// let section1 = "section1 ";

//! document.getElementById("id_value")
//it targets the element with specific id value and returns it.
let container = document.getElementById("section1");
console.log(container);

//! document.getElementsByClassName("class_value")
// it targets the element with specific class value and returns an HTMLCollection
let contentContainer = document.getElementsByClassName("content");
console.log(contentContainer);
console.log(contentContainer[2]);

// return boolean value if array is pure then true else false
console.log(Array.isArray(contentContainer));

// Array.from()
// accepts impure array and convert it into pure array and returns it
let pureArray = Array.from(contentContainer);
console.log(pureArray);
pureArray.map((ele) => {
  console.log(ele);
});

let footer = document.getElementsByClassName("foot")[0];
console.log(footer);

// [] (index) target html Collection element which we want .

let div = document.getElementsByTagName("div")[2];
console.log(div);

let x = document.querySelectorAll(".content");
console.log(x);


