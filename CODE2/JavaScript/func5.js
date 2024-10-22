// document.write("21-10-2024(Monday");
console.log("hello world");

async function chandData() {
  let dk = await fetch("https://fakestoreapi.com/products");
  let ck = await dk.json();
  console.log(ck);

  displayDate(ck);
}
chandData();

function displayDate(allck) {
  console.log(allck);
  allck.map((ele) => {
    console.log(ele.title);
    //
    document.write(`
        <section id="item" ><h1>${ele.title}</h1>
        <p> Price : ${ele.price}</p>
        <p> Description: $ {ele.Description} </p>
        <button> Buy Now </button>
        </section>`);
  });
}9
