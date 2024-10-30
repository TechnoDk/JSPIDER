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
