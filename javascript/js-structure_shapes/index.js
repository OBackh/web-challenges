import createCircle from "./components/Circle/Circle.js";

console.clear();

const root = document.getElementById("root");

// create elements manuell

// const circle = document.createElement("div");
// circle.classList.add("circle");
// circle.addEventListener("click", () => {
//   circle.style.backgroundColor = getRandomColor();
// });

// create elements mit function

const circle = createCircle();

//============
// const square = document.createElement("div");
// square.classList.add("square");
// square.addEventListener("click", () => {
//   square.style.backgroundColor = getRandomColor();
// });

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = getRandomColor();
// });

//add elements

root.append(circle);
//root.append(circle /*, square, pentagon*/);
//console.log(circle);
