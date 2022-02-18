const slider = document.querySelector("#slider");
const output = document.querySelector(".price-amount");
const progressBar = document.querySelector(".progress-bar");
const pageviews = document.querySelector(".pageviews");
const toggle = document.querySelector(".toggle");

// Create event listener for moving range slider

slider.oninput = function () {
  //  set innerText to value of range slider
  output.innerText = this.value;
  //   progress bar moves with thumb dependent on value
  progressBar.style.width = this.value + "%";

  if (toggle.checked === false) {
    switch (output.innerText) {
      case "0":
        output.innerText = "$8.00";
        pageviews.innerText = "10K pageviews";
        break;
      case "25":
        output.innerText = "$12.00";
        pageviews.innerText = "50K pageviews";
        break;
      case "50":
        output.innerText = "$16.00";
        pageviews.innerText = "100K pageviews";
        break;
      case "75":
        output.innerText = "$24.00";
        pageviews.innerText = "500K pageviews";
        break;
      case "100":
        output.innerText = "$36.00";
        pageviews.innerText = "1M pageviews";
        break;
    }
  }

  if (toggle.checked === true) {
    switch (output.innerText) {
      case "0":
        output.innerText = "$6.00";
        pageviews.innerText = "10K pageviews";
        break;
      case "25":
        output.innerText = "$9.00";
        pageviews.innerText = "50K pageviews";
        break;
      case "50":
        output.innerText = "$12.00";
        pageviews.innerText = "100K pageviews";
        break;
      case "75":
        output.innerText = "$18.00";
        pageviews.innerText = "500K pageviews";
        break;
      case "100":
        output.innerText = "$27.00";
        pageviews.innerText = "1M pageviews";
        break;
    }
  }
};

// Event listener for when toggle button is clicked to yearly

toggle.addEventListener("click", (e) => {
  if (toggle.checked === true) {
    const replacedAmount = output.innerText.replace(/\$/g, "");
    const discount = parseFloat(replacedAmount) * 0.25;
    const discountTotal = replacedAmount - discount;
    output.innerText = `$${discountTotal.toFixed(2)}`;
  }

  //   Event listener for when toggle button is clicked back to monthly

  if (toggle.checked === false) {
    switch (output.innerText) {
      case "$6.00":
        output.innerText = "$8.00";
        break;
      case "$9.00":
        output.innerText = "$12.00";
        break;
      case "$12.00":
        output.innerText = "$16.00";
        break;
      case "$18.00":
        output.innerText = "$24.00";
        break;
      case "$27.00":
        output.innerText = "$36.00";
        break;
    }
  }
});
