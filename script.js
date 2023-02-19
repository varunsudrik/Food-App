let search = document.getElementById("search");
let submit = document.getElementById("submit");
let random = document.getElementById("random");

let heading = document.getElementsByClassName("result-heading");
heading.innerHTML += "asgs";
let mealEL = document.getElementById("meals");
let single_mealEL = document.getElementById("single-meal");

submit.addEventListener("click", (e) => {
  e.preventDefault;
  // clear single mean(random)
  single_mealEL.innerHTML = "";
  document.getElementsByClassName("result-heading").innerHTML += "Varun";

  let val = search.value;

  // check for empty input
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    .then((Response) => Response.json())
    .then((data) => {
      heading[0].textContent = `<h2>Search result for term ${val}</h2>`;
      if (data.meals == null) {
        heading[0].textContent = `There are no result for term ${val}`;
      } else {
        mealEL.innerHTML = data.meals.map(
          (meal) =>
            `<div class="meal">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
          </div>`
        );
      }
    });
});
