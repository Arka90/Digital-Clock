const div = document.querySelector(".clock-digit");

setInterval(() => {
  let now = new Date();
  let formatted = new Intl.DateTimeFormat(navigator.language, {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(now);
  div.textContent = formatted;
}, 1000);
