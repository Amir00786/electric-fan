const a = document.getElementById("img");
let isOn = false;

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function setSpeedButtons(enabled) {
  const buttons = [btn1, btn2, btn3];
  buttons.forEach(btn => {
    if (enabled) {
      btn.classList.remove("disabled");
      btn.disabled = false;
    } else {
      btn.classList.add("disabled");
      btn.disabled = true;
    }
  });
}

function myfunon() {
  isOn = true;
  a.style.animationDuration = "3s";
  setSpeedButtons(true);
}

function myfunoff() {
  isOn = false;
  a.style.animationDuration = "0s";
  setSpeedButtons(false);
}

function myfun2() {
  if (isOn) a.style.animationDuration = "1s";
}

function myfun3() {
  if (isOn) a.style.animationDuration = "0.5s";
}

function myfun4() {
  if (isOn) a.style.animationDuration = "0.1s";
}

window.onload = () => {
  setSpeedButtons(false);
};