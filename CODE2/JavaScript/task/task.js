// let DBdata = [
//   {
//     id: 1,
//     title: "Laptop",
//     brand: "HP",
//     price: 50000,
//     pic: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c07991100_1.png",
//   },
//   {
//     id: 2,
//     title: "Laptop",
//     brand: "Dell",
//     price: 60000,
//     pic: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-2.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=679&qlt=100,1&resMode=sharp2&size=679,402&chrss=full",
//   },
//   {
//     id: 3,
//     title: "Laptop",
//     brand: "Asus",
//     price: 80000,
//     pic: "https://m.media-amazon.com/images/I/718YGA3IL6L.jpg",
//   },
//   {
//     id: 4,
//     title: "Laptop",
//     brand: "Lenovo",
//     price: 40000,
//     pic: "https://www.reliancedigital.in/medias/Lenovo-Yoga-Laptop-494351836-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w2Mzk3MHxpbWFnZS9qcGVnfGltYWdlcy9oODMvaDJmLzEwMTAxNTEwODk3Njk0LmpwZ3wzMjA1YTQ2YTc1OWIxYjY1MDI0NDhjNWJlMzRiOTNhYWUyYTM1NTQyOGYxY2ZjOGQ4MmQyMzcwZjRjMjlkYjkw",
//   },
// ];

// let productsWrapperEle = document.querySelector("#productsWrapper");

// DBdata.map((product) => {
//   // console.log(product);

//   // ! -> CREATING ELEMENTS DYNAMICALLY
//   let card = document.createElement("div");
//   let image = document.createElement("img");

//   // ! -> SETTING ATTRIBUTE TO ELEMENTS DYNAMICALLY
//   card.setAttribute("class", "card");
//   image.setAttribute("src", product.pic);

//   // ! -> APPENDING ALL ELEMENTS AS A CHILD OF CARD
//   card.append(image);

//   // ! -> APPENDING CARD AS A CHILD OF PRODUCTS_WRAPPER
//   productsWrapperEle.append(card);
// });

// DATE :- 12/11/2024(TUESDAY)
console.log("12/11/2024");
let cartItems = [];

const productsWrapper = document.getElementById("productsWrapper");
// ! To Fetch Data From API
async function fetchProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let allProducts = await response.json();
  // console.log(allproducts);

  DisplayProducts(allProducts); // SENDING ALL_PRODUCTS TO DISPLAYPRODUCTS FUNC
}
fetchProducts();
function DisplayProducts(products) {
  console.log(products);
  products.map((product) => {
    // console.log(Product);
    // CREATING ELEMENTS
    let card = document.createElement("section");
    let image = document.createElement("img");
    let product_title = document.createElement("h2");
    let product_desc = document.createElement("p");
    let product_price = document.createElement("p");
    let add_to_cart_btn = document.createElement("button");

    // ADDING TEXT CONTENT
    // product_title.textContent = product_title;
    product_title.textContent = `${product.title.slice(0, 20)}`;
    product_desc.textContent = `${product.description.slice(0, 20)}...`;
    //   product_price.textContent = 'price ${product_price)'
    product_price.innerHTML = `&#8377: ${product.price}`;
    add_to_cart_btn.textContent = "Add to cart";

    // SETTING ATTRIBUTE
    card.setAttribute("class", "card");
    image.setAttribute("src", product.image);

    add_to_cart_btn.addEventListener("click", () => {
      console.log("item added to cart");
      console.log(product);
    });

    // cartItem.push({ ...product, quantity: 1 });

    let existingProduct = cartItems.find((ele) => ele.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cartItems.push({ ...product, quantity: 1 });
      add_to_cart_btn.textContent = "Add more";
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(cartItems);

    card.append(
      image,
      product_title,
      product_desc,
      product_price,
      add_to_cart_btn
    );

    productsWrapper.append(card);
  });
}
