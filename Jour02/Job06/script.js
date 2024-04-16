document.addEventListener("DOMContentLoaded", function (event) {
  //   document.addEventListener("keydown", function (e) {
  //     console.log(e.key);
  //   });
  KonamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  var i = 0;
  document.addEventListener("keydown", function (e) {
    console.log(e.key);
    console.log(KonamiCode[i]);
    console.log(i);
    if (e.key === KonamiCode[i]) {
      i++;
      if (i === KonamiCode.length) {
        alert("Konami Code Activated");
        // document.body.style.backgroundColor = "#0062FF";
        // document.body.style.display = "flex";
        // document.body.style.justifyContent = "center";
        // document.body.style.alignItems = "center";

        // hyper_link = document.createElement("hyper_link");

        // hyper_link.href = "https://laplateforme.io/";
        // hyper_link.textContent = "La Plateforme";
        // hyper_link.style.color = "white";
        // hyper_link.style.fontSize = "2em";
        // document.body.appendChild(hyper_link);

        document.body.className = "body-style";

        let hyperlink = document.createElement("a");
        hyperlink.href = "https://laplateforme.io/";
        hyperlink.textContent = "La Plateforme";
        hyperlink.className = "hyperlink-style";

        document.body.appendChild(hyperlink);
        i = 0;
      }
    } else {
      i = 0;
    }
  });
});
