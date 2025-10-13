function changeText() {
  const CTA = document.getElementById("myCallToAction");
  CTA.textContent = "You're ready to go!";
}

const input = document.querySelector("input");
const result = document.getElementById("result");

input.addEventListener("change", updateValue);

function updateValue(e) {
  result.textContent = e.target.value;
}

