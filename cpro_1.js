document.addEventListener("DOMContentLoaded", function() {
  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  document.body.appendChild(tooltip);

  document.querySelectorAll("[data-tooltip]").forEach(elem => {
    elem.addEventListener("mouseover", function() {
      tooltip.textContent = this.dataset.tooltip;
      const rect = this.getBoundingClientRect();
      tooltip.style.left = rect.left + window.scrollX + "px";
      tooltip.style.top = rect.bottom + window.scrollY + "px";
      tooltip.style.display = "block";
    });

    elem.addEventListener("mouseout", function() {
      tooltip.style.display = "none";
    });
  });
});

const email = document.getElementById("message");

message.addEventListener("input", (event) => {
  if (message.validity.tooShort) {
    message.setCustomValidity("Please write at least 30 characters!");
  } else {
    message.setCustomValidity("");
  }
});

