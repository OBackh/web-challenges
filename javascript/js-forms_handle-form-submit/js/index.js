console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();

  event.target.elements.firstName.focus();

  const age = data.age;
  console.log(age);
  const badness = data.badness;
  console.log(badness);
  const sum = age + badness;
  console.log(sum);

  console.log("The age-badness-sum of", data.firstName, "is", sum);
});
