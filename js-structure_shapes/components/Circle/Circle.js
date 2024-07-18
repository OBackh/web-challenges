import getRandomColor from "../../utils/randomColor.js";

export default function createCircle() {
  const circleElement = document.createElement("div");
  circleElement.classList.add("circle");
  circleElement.style.backgroundColor = getRandomColor();
  circleElement.addEventListener("click", () => {
    circleElement.style.backgroundColor = getRandomColor();
  });

  return circleElement;
}
