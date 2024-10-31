const incDecInput = document.querySelector("input[name='inc-dec-input']");
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const resetBtn = document.getElementById("reset-btn");
const countDisplay = document.getElementById("count-display");

plusBtn.addEventListener("click", function () {
  countDisplay.innerText =
    Number(countDisplay.innerText) + Number(incDecInput.value);
});
minusBtn.addEventListener("click", function () {
  countDisplay.innerText =
    Number(countDisplay.innerText) - Number(incDecInput.value);
});
resetBtn.addEventListener("click", function () {
  countDisplay.innerText = 0;
});
incDecInput.addEventListener("focusout", function () {
  if (incDecInput.value === "") incDecInput.value = 1;
});
