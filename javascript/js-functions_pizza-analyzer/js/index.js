console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  pizzaInput1.value;
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  pizzaInput2.value;
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const area1 = (diameter1 / 2) * Math.PI * 2;
  const area2 = (diameter2 / 2) * Math.PI * 2;

  let gain = ((area2 - area1) / area1) * 100;

  gain = Math.round(gain);

  console.log(gain);

  return gain;
}

calculatePizzaGain(pizzaInput1, pizzaInput2);

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
