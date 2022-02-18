const slider = document.querySelector("#slider");
const output = document.querySelector(".price-amount");
const progressBar = document.querySelector(".progress-bar");

output.innerText = slider.value;

slider.oninput = function () {
  output.innerText = this.value;
  progressBar.style.width = this.value + "%";
};
