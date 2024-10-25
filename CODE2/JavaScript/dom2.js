//DOM EVENTS
// Onclick()
function clickMe() {
  console.log("BTN is clicked");
}

function double() {
  console.log("Double clicked");
}
function cursurEnter() {
  console.log("MOUSE Enter only Hover like");
}
function cursurLeave() {
  console.log("Mouse Left");
}
function cursurMove() {
  console.log("Cursur Move");
}

function keyPressed() {
  console.log("Key is pressed");
}

function keyReleased() {
  console.log("key Released");
}

function formSubmit(e) {
  e.preventDefault();
  console.log(e);

  // let email = document.getElementById("email");
  // let Password = document.getElementById("Password");
  // console.log({ email: email.value, Password: Password.value });

  let email = document.getElementById("email").value;
  let Password = document.getElementById("Password").value;
  console.log({ email, Password });
}
