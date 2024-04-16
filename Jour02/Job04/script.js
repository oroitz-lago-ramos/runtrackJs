document.addEventListener("DOMContentLoaded", function (event) {function write(event) {
  var key = event.key;
  if (document.activeElement === keylogger) {
    event.preventDefault();
    keylogger.value += key + key;
  } else {
    keylogger.value += key;
  }
}

var keylogger = document.getElementById("keylogger");
document.addEventListener("keydown", write);});