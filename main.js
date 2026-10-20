
const message = document.querySelector("#message");
const button = document.querySelector("#greet-button");
const themeButton = document.querySelector("#theme-button");

button.addEventListener("click", () => {
  message.textContent = "¡Qué bueno verte por aquí!";
  button.textContent = "¡Hola!";
});

themeButton.addEventListener("click", () => {
  const isDark = document.documentElement.dataset.theme !== "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeButton.textContent = isDark ? "Activar tema claro" : "Activar tema oscuro";
  themeButton.setAttribute("aria-pressed", String(isDark));
});

const clock = document.querySelector("#clock");
const hourHand = document.querySelector("#clock-hour");
const minuteHand = document.querySelector("#clock-minute");
const secondHand = document.querySelector("#clock-second");

function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
  clock.setAttribute("aria-label", `Hora actual: ${now.toLocaleTimeString("es-ES")}`);
}

updateClock();
setInterval(updateClock, 1000);