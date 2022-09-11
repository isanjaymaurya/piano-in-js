const pianokeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  console.log(newUrl);
  new Audio(newUrl).play();
}

pianokeys.forEach((pianoKey, i) => {
  const keyNo = i < 9 ? "0" + (i + 1) : i + 1;
  const newUrl = `/assets/mp3/24-piano-keys/key${keyNo}.mp3`;
  pianoKey.addEventListener("click", () => playSound(newUrl));
});
