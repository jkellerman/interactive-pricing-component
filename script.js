const slider = document.querySelector("#slider");
const output = document.querySelector(".price-amount");
const progressBar = document.querySelector(".progress-bar");
const pageviews = document.querySelector(".pageviews");

slider.oninput = function () {
  output.innerText = this.value;
  progressBar.style.width = this.value + "%";

  switch (output.innerText) {
    case "0":
      output.innerText = "$8.00";
      break;
    case "25":
      output.innerText = "$12.00";
      break;
    case "50":
      output.innerText = "$16.00";
      break;
    case "75":
      output.innerText = "$24.00";
      break;
    case "100":
      output.innerText = "$36.00";
      break;
  }
};
