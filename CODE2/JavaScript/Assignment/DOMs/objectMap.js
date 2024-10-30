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
  return monthNames[monthNumber] || "unknown";
}
console.log(getMonthName(3));
function showMonthName() {
  const monthNumber = parseInt(document.getElementById("monthInput").value);
  const monthName = getMonthName(monthNumber);
  document.getElementById(
    "monthNameDisplay"
  ).textContent = `Month Name :${monthName}`;
}
