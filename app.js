const searchMeal = () => {
  const searchText = document.getElementById("search-box").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const mealCard = document.getElementById("meal-card");
  mealCard.innerHTML = "";
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "col mb-4 text-decoration-none";
    mealDiv.innerHTML = `
        <div onclick="getIngredients('${meal.idMeal}')" class="card mt-5">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
            </div>
          </div>
        `;
    mealCard.appendChild(mealDiv);
  });
};

const getIngredients = (meal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}
    `;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayIngredients(data.meals[0]));
};

const displayIngredients = (ingredients) => {
  const ingredientsDiv = document.getElementById("ingredients-box");
  ingredientsDiv.style.display = "inline";
  ingredientsDiv.innerHTML = `
    <div style="width:18rem;" class="card text-center m-auto">
    <img src="${ingredients.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5>${ingredients.strMeal}</h5>
      <ul>
          <li class="list-unstyled">${ingredients.strIngredient1}</li>
          <li class="list-unstyled">${ingredients.strIngredient2}</li>
          <li class="list-unstyled">${ingredients.strIngredient3}</li>
          <li class="list-unstyled">${ingredients.strIngredient4}</li>
          <li class="list-unstyled">${ingredients.strIngredient5}</li>
          <li class="list-unstyled">${ingredients.strIngredient6}</li>
          <li class="list-unstyled">${ingredients.strIngredient7}</li>
          <li class="list-unstyled">${ingredients.strIngredient8}</li>
          <li class="list-unstyled">${ingredients.strIngredient9}</li>
          <li class="list-unstyled">${ingredients.strIngredient10}</li>
          <li class="list-unstyled">${ingredients.strIngredient11}</li>
          <li class="list-unstyled">${ingredients.strIngredient12}</li>
          <li class="list-unstyled">${ingredients.strIngredient13}</li>
          <li class="list-unstyled">${ingredients.strIngredient14}</li>
          <li class="list-unstyled">${ingredients.strIngredient15}</li>
          <li class="list-unstyled">${ingredients.strIngredient16}</li>
          <li class="list-unstyled">${ingredients.strIngredient17}</li>
          <li class="list-unstyled">${ingredients.strIngredient18}</li>
          <li class="list-unstyled">${ingredients.strIngredient19}</li>
          <li class="list-unstyled">${ingredients.strIngredient20}</li>
      </ul>
    </div>
    </div>
    `;
};
