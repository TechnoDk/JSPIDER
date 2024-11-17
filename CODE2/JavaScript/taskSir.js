const productsWrapper = document.getElementById("productsWrapper");
const cartProducts = document.getElementById("cartProducts");
const price = document.getElementById("price");
let cartItems = [];

//! TO FETCH DATA FROM API
async function fetchProducts() {
  let response = await fetch("https://fakestoreapi.com/products");
  let allproducts = await response.json();
  DisplayProducts(allproducts); //! SENDING ALL_PRODUCTS TO DisplayProducts func
}
fetchProducts();

function DisplayProducts(products) {
  products.map((product) => {
    //! CREATING ELEMENTS
    let card = document.createElement("section");
    let image = document.createElement("img");
    let product_title = document.createElement("h2");
    let product_desc = document.createElement("p");
    let product_price = document.createElement("p");
    let add_to_cart_btn = document.createElement("button");

    //! ADDING TEXT CONTENT
    product_title.textContent = product.title.slice(0, 35);
    product_desc.textContent = `${product.description.slice(0, 20)}...`;
    product_price.innerHTML = `&#8377; ${product.price}`;
    add_to_cart_btn.textContent = "Add to cart";

    //! SETTING ATTRIBUTE
    card.setAttribute("class", "card");
    image.setAttribute("src", product.image);

    add_to_cart_btn.addEventListener("click", () => {
      console.log("item added to cart");

      // finding if product exists in cart or not
      let existingProduct = cartItems.find((ele) => ele.id === product.id);

      // if it exists, increase quantity +1
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        // push product in cart with a new key i.e, quantity
        cartItems.push({ ...product, quantity: 1 });
        add_to_cart_btn.textContent = "Add More";
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      DisplayCartItems(); //calling DisplayCartItems function on btn click
    });

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

function DisplayCartItems() {
  console.log("DisplayCartItems");
  let totalPrice = 0;

  // clearing pervious HTML
  cartProducts.innerHTML = "";

  // fetching cart items from localstorage
  let cartData = JSON.parse(localStorage.getItem("cart"));
  console.log(cartData);

  // iterating cart items and displaying on UI
  cartData.map((item) => {
    let cartCard = document.createElement("article");
    let itemImage = document.createElement("img");
    let itemContentWrapper = document.createElement("div");
    let itemTitle = document.createElement("h1");
    let itemQuanity = document.createElement("p");
    let itemPrice = document.createElement("p");
    let deleteItem = document.createElement("button");

    cartCard.setAttribute("id", "cartCard");
    itemImage.setAttribute("src", item.image);

    itemTitle.textContent = `${item.title.slice(0, 30)}........`;
    itemQuanity.textContent = `Quantity: ${item.quantity}`;
    itemPrice.textContent = `Price: ${item.quantity * item.price}`;
    deleteItem.textContent = "Remove";

    totalPrice += item.price;
    console.log("total", totalPrice);
    price.textContent = `Rs.${Math.floor(totalPrice)}`;

    itemContentWrapper.append(itemTitle, itemQuanity, itemPrice, deleteItem);
    cartCard.append(itemImage, itemContentWrapper);
    cartProducts.append(cartCard);
  });
}
