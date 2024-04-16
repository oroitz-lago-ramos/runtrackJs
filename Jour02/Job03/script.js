document.addEventListener("DOMContentLoaded", function (event) {
  function addOne() {
    let p = document.getElementById("compteur");
    p.textContent = parseInt(p.textContent) + 1;
  }

  var button = document.getElementById("button");
  button.addEventListener("click", addOne);
});
