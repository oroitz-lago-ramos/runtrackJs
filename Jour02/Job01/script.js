document.addEventListener("DOMContentLoaded", function (event) {
  
  function citation() {
    var citation = document.getElementById("citation").textContent;
    console.log(citation);
  }

  button = document.getElementById("button");
  button.addEventListener("click", citation);
});
