console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time:  )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here

  const t = new Date().getHours();

  if (t >= 6 && t <= 12) {
    return "Good Morning";
  } else if (t >= 13 && t <= 18) {
    return "Good Afternoon";
  } else if (t >= 19 && t <= 22) {
    return "Good Evening";
  } else if (t >= 23 && t <= 5) {
    return "Good Evening";
  }
}

function getDayColor() {
  // Code here
  const d = new Date().getDay();

  if (d == "monday") {
    return "darkgray";
  } else if (
    d == "tuesday" ||
    d == "wednesday" ||
    d == "thursday" ||
    d == "friday"
  ) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
