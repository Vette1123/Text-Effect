const textEl = document.getElementById("text");
const speedEL = document.getElementById("speed");

const text = "Sadge?...";
let idx = 1;
let speed = 300;
writeText();
function writeText() {
  textEl.innerHTML = text.slice(0, idx);
  idx++;
  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedEL.addEventListener("click", (e) => {
  speed = 300 / e.target.value;
});
