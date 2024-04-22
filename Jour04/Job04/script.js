document.addEventListener("DOMContentLoaded", function () {
  const updateButton = document.getElementById("updateButton");
  const userTableBody = document.querySelector("#userTable tbody");

  function updateTable(userData) {
    userTableBody.innerHTML = "";

    userData.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${user.id}</td>
          <td>${user.first_name}</td>
          <td>${user.last_name}</td>
          <td>${user.email}</td>
        `;
      userTableBody.appendChild(row);
    });
  }

  updateButton.addEventListener("click", function () {
    fetch("utilisateur.json")
      .then((response) => response.json())
      .then((data) => updateTable(data))
      .catch((error) => console.error("Error fetching data:", error));
  });

  fetch("utilisateur.json")
    .then((response) => response.json())
    .then((data) => updateTable(data))
    .catch((error) => console.error("Error fetching initial data:", error));
});
