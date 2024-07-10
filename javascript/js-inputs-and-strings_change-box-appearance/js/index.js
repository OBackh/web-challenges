/*

Change the appearance of the box according to the values of the sliders (color, border radius, rotation)

– [ ] Add an event listener for each input element.

– [ ] When the slider control of inputColor is moved, change the background color of the box.
      Hint: You need to work with the hsl() functional notation for colors.

– [ ] When the slider control of inputRadius is moved, change the border radius of the box.
      If the control reaches the right end, make the box look like a circle.

– [ ] When the slider control of inputRotation is moved, rotate the box.
      Hint: You may need to work with the CSS property "transform" and a value that contains "rotate" and "deg".

Hint: You can work with the property "style", just like you worked with the property "classList".

For further information check MDN:
- about inputs of type="range": https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
- about hsl(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl
- about transform & rotate: https://developer.mozilla.org/en-US/docs/Web/CSS/transform
- about CSS declarations with "style": https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style

*/

const colorBox = document.querySelector('[data-js="box"]');

const colorSlider = document.querySelector('[data-js="input-color"]');
const radiusSlider = document.querySelector('[data-js="input-radius"]');
const rotationSlider = document.querySelector('[data-js="input-rotation"]');
const button = document.querySelector('[data-js="input-random"]');

colorSlider.addEventListener("input", () => {
  const hueValue = colorSlider.value;
  const color = `hsl(${hueValue}, 100%, 50%)`;

  // Update the background color of the color box
  colorBox.style.backgroundColor = color;
});

radiusSlider.addEventListener("input", () => {
  const radius = radiusSlider.value;

  // Update the border-radius of the color box
  colorBox.style.borderRadius = `${radius}px`;
});

rotationSlider.addEventListener("input", () => {
  const degree = rotationSlider.value;

  // Update the border-radius of the color box
  colorBox.style.transform = `rotate(${degree}deg)`;
});

function getRandom(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

button.addEventListener("mousedown", () => {
  //random rotation
  const randomRotation = getRandom(1, 180);
  console.log("Random Degree: " + randomRotation);
  colorBox.style.transform = `rotate(${randomRotation}deg)`;

  //random color
  const randomColor = getRandom(1, 360);
  console.log("Random Color: " + randomColor);
  const color = `hsl(${randomColor}, 100%, 50%)`;
  colorBox.style.backgroundColor = color;

  //random border-radius
  const randomRadius = getRandom(1, 100);
  console.log("Random Amount: " + randomRadius);
  colorBox.style.borderRadius = `${randomRadius}px`;
});
