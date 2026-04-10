/* autoplayer */

let button = document.getElementById("button");
let audio = document.getElementById("player");

button.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    button.innerHTML = '<i class="fa fa-pause"></i>';
  } else {
    audio.pause();
    button.innerHTML = '<i class="fa fa-play"></i>';
  }
});

/* end of autoplayer */