document.addEventListener("DOMContentLoaded", function () {
  var email_entry = document.getElementById("email");
  var email_error = document.getElementById("emailError");

  var password_entry = document.getElementById("password");
  var password_error = document.getElementById("passwordError");

  email_entry.addEventListener("input", function () {
    const email = email_entry.value;
    VerifEmail(email);
  });

  password_entry.addEventListener("input", function () {
    const password = password_entry.value;
    VerifPassword(password);
  });

  function VerifEmail(email) {
    if (email === "") {
      email_error.innerHTML = "Veuillez renseigner ce champ";
      email_error.style.color = "red";
    } else if (!email.includes("@")) {
      email_error.innerHTML = "Veuillez renseigner un email valide";
      email_error.style.color = "red";
    } else {
      email_error.innerHTML = "";
    }
  }

  function VerifPassword(password) {
    if (password === "") {
      password_error.innerHTML = "Veuillez renseigner ce champ";
      password_error.style.color = "red";
    } else if (password.length < 8) {
      password_error.innerHTML =
        "Veuillez renseigner un mot de passe valide (au moins 8 caractères)";
      password_error.style.color = "red";
    } else {
      password_error.innerHTML = "";
    }
  }
});
