function initCard(zahlA, zahlB) {
  document
    .querySelector(`.flip-card-${zahlA}`)
    .addEventListener("click", function () {
      this.querySelector(`.flip-card-inner-${zahlB}`).classList.toggle(
        `flipped`
      );
    });
}

initCard("1", "1");
initCard("2", "2");
initCard("3", "3");
initCard("4", "4");

const dabei = document.getElementById("dabei");
const bdayAudio = document.querySelector("#birthdayAudio");
const frogImg = document.querySelector("#frog");

dabei.addEventListener("click", () => {
  sadAudio.pause();
  sadAudio.currentTime = 0;
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti();
  bdayAudio.play();
  frogImg.style.display = "block";
  sadhamsterImg.style.display = "none";
});

const sadhamsterImg = document.querySelector("#sadhamster");
const sadAudio = document.querySelector("#hamsterAudio");
const nicht = document.getElementById("nicht");

nicht.addEventListener("click", () => {
  bdayAudio.pause();
  bdayAudio.currentTime = 0;
  // Zeige das Bild an
  sadhamsterImg.style.display = "block";
  sadAudio.play(); // Starte die Wiedergabe der Audiodatei
  frogImg.style.display = "none";
});
