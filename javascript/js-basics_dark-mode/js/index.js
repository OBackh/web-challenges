console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

console.log(bodyElement.classList);

const buttonDark = document.querySelector("[data-js='dark-mode-button']");
const buttonLight = document.querySelector("[data-js='light-mode-button']");
const buttonToggle = document.querySelector("[data-js='toggle-button']");

buttonDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
  console.log("added dark-mode");
});

buttonLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
  console.log("removed dark-mode");
});

buttonToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
  console.log("toggled between dark-/light");
});
