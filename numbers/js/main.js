const form = document.querySelector('form');
const dataOutput = document.querySelector('.data-output');

form.addEventListener("submit", function (evt) {
  dataOutput.scrollIntoView();
});