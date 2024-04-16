document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
    let documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    let scrollFraction = scroll / documentHeight;

    let color = `hsl(${scrollFraction * 330}, 100%, 50%)`;

    let footer = document.querySelector("footer");
    footer.style.backgroundColor = color;
  });
});
