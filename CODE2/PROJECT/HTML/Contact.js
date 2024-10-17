// Function to validate the form
function validateForm() {
  // Get the form elements
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const messageError = document.getElementById("messageError");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  messageError.textContent = "";

  // Validation flags
  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Please enter your name";
    isValid = false;
  }

  // Email validation (basic regex check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Phone validation (basic 10-digit check)
  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Please enter your message";
    isValid = false;
  }
  // If all fields are valid, show a success alert
  if (isValid) {
    alert("Form submitted successfully!");
    return true; // Allow form submission
  }

  // If validation fails, show error popup
  else {
    alert("Please fill out the form correctly.");
    return false; // Prevent form submission
  }
}
