$(document).ready(function () {
  console.log("Script loaded");
  var correctOrderImages = $("#rainbow .rainbow-img").toArray();
  function isRainbowCorrect() {
  let imagesArray = $("#rainbow .rainbow-img").toArray();
  if (imagesArray.length !== correctOrderImages.length) {
    return false;
  }
  for (let i = 0; i < imagesArray.length; i++) {
    if (imagesArray[i] !== correctOrderImages[i]) {
      return false;
    }
  }
  return true;
}
  p = document.getElementById("result");
  $("#shuffle").click(function () {
    var images = $("#rainbow .rainbow-img");
    shuffle(images).appendTo("#shuffle-result");
    p.textContent = "";
  });
  $(".rainbow-img").click(function () {
    if ($(this).parent().is("#shuffle-result")) {
      $(this).appendTo("#rainbow");
      if (isRainbowCorrect() && $("#shuffle-result").children().length === 0){
        p.textContent = "Vous avez gagné";
        p.style.color = 'rgb(0, 255, 0)';
      }
      else if (!isRainbowCorrect() && $("#shuffle-result").children().length === 0){
        p.textContent = "Vous avez perdu";
        p.style.color = 'rgb(255, 0, 0)';
      }
      else {
        p.textContent = "";
      }
    } else if ($(this).parent().is("#rainbow")) {
      $(this).appendTo("#shuffle-result");
      p.textContent = "";
    }
  });
});

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


