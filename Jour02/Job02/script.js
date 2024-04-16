document.addEventListener("DOMContentLoaded", function (event) {
  function showhide() {
    var article = document.getElementById("citation");
    var content = article.textContent;

    if (content.trim() == "") {
      article.innerHTML =
        "L'important n'est pas la chute, mais l'atterrissage.";
    } else {
      article.innerHTML = "";
    }
  }

  button = document.getElementById("button");
  button.addEventListener("click", showhide);
});
