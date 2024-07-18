console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData(key, value) {
  const response = await fetch(url);
  console.log("Erster Log in Funktion, Start-fetch:");
  console.log(response);

  const data = await response.json();
  console.log("Zweiter Log in Funktion, Ausgabe des empfangenen JSON:");
  console.log(data.results);

  const people = data.results;

  console.log(people[0]);

  console.log(people[2].eye_color);

  const searchResult = people.find((element) => element.key === value);
  console.log(searchResult);
}

console.clear();

console.log("Erste Suche:");
fetchData("name", "R2-D2");

// function findByCitySubString(employees, string) {
//     return employees.find((element) => element.city.includes(string));
//   }

// function findByCitySubString(key, value) {
//     return people.find((element) => element.key.includes(value));
//   }
