function submitNomination() {
  const teamName = document.getElementById("team-name").value;
  const teamMember = document.getElementById("team-member").value;
  const reason = document.getElementById("reason").value;

  // Display a confirmation message
  const resultDiv = document.getElementById("nomination-result");
  resultDiv.innerHTML = `
        <p>Thank you for your nomination!</p>
        <p><strong>Team Name:</strong> ${teamName}</p>
        <p><strong>Team Member:</strong> ${teamMember}</p>
        <p><strong>Reason:</strong> ${reason}</p>
    `;

  // Clear the form fields
  document.getElementById("nomination-form").reset();

  // Prevent form submission
  return false;
}
