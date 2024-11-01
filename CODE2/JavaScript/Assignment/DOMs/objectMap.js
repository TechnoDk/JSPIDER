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
    Number: monthNameDisplay.value,
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
           <p> monthNameDisplay:${ele.monthName}</p>
           <button>PDF: <a href="showdata.pdf" download="Data" >Download</a></button>
           
          
        
        </section>`
    );
  });
}

const monthNames = {
  1: "January",
  2: "February",
  3: "March",
  4: "Aprail",
  5: "May",
  6: "June",
  7: "July",
  8: "Augest",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};
function getMonthName(monthNumber) {
  return monthNames[monthNumber] || "Unknown";
}
console.log(getMonthName(3));
function showMonthName() {
  const monthNumber = parseInt(document.getElementById("monthInput").value);
  const monthName = getMonthName(monthNumber);
  document.getElementById(
    "monthNameDisplay"
  ).textContent = `Month Name :${monthName}`;
}
