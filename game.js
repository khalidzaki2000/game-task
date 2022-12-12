let parentDiv = document.querySelector(".parent");
let counterDiv = document.querySelector("#counter");
let successDiv = document.querySelector(".success-message");
let failDiv = document.querySelector(".fail-message");
for (let index = 1; index <= 16; index++) {
  let randomClassIndex = Math.floor(Math.random() * (3 + 0) + 1);
  parentDiv.innerHTML += `<button class="box-${randomClassIndex}" id="${index}"> </button>`;
}

const nunmberOfTrials = 3;
let currentTrail = 1;
let isWin = false;
let randomIndex = Math.floor(Math.random() * (17 + 0) + 0);
let Buttons = document.querySelectorAll(
  "button.box-1, button.box-2,button.box-3"
);
for (let index = 0; index < Buttons.length; index++) {
  Buttons[index].addEventListener("click", (event) => {
    if (!isWin && currentTrail <= nunmberOfTrials) {
      if (parseInt(event.target.id) === randomIndex) {
        event.target.classList.remove("box");
        event.target.classList.add("diamond");
        isWin = true;
        successDiv.style.display = "block";
      } else {
        event.target.classList.remove("box");
        event.target.classList.add("coal");
      }
      currentTrail++;
      counterDiv.innerHTML = `remaining trials : ${
        nunmberOfTrials + 1 - currentTrail
      }`;
    }
    if (!isWin && currentTrail > nunmberOfTrials) {
      failDiv.style.display = "block";
    }
  });
}
