function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "Aprail";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "Augest";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Unknown Month";
  }
}
console.log(getMonthName);
function showMonthName() {
  const monthNumber = parseInt(document.getElementById("monthInput").value);
  const monthName = getMonthName(monthNumber);
  document.getElementById(
    "monthNameDisplay"
  ).textContent = `Month Name :${monthName}`;
}
function formSubmit(e) {
  e.preventDefault();
  //  console.log(e);

  // let email = document.getElementById("email");
  // let Password = document.getElementById("Password");
  // console.log({ email: email.value, Password: Password.value });
  let name = document.getElementById("name");
  //console.log(name.value);
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  // console.log(name, email, password);
}

let data = [];
function pushData() {
  let result = {
    Name: user.value,
    Email: email.value,
    Password: password.value,
  };

  data.push(result);
  console.log("pushed");
}
function showdata() {
  console.log(data);

  data.forEach((ele) => {
    document.write(
      `
        <section id="item">
          <h1>Name:-${ele.Name}</h1>
          <p>Email:${ele.Email}</p>
           <p> Password:${ele.Password}</p>
           <button>PDF: <a href="showdata.pdf" download="Data" >Download</a></button>
           
          
        
        </section>`
    );
  });
}
