import "./Cocktail.css";

const Cocktail = () => {
  const cocktailRecipe = {
    name: "Special Drink",
    ingredients: ["4 cl vodka", "150 ml special juice"],
    instructions: "Shake and stir.",
    imageUrl: "https://www.thecocktaildb.com/images/media/drink/uuytrp1474039804.jpg"
  }

  let ingredientsList = cocktailRecipe.ingredients.map((ingredientItem) => <li>{ingredientItem}</li>);

  return (
    <div>
      <div className="recipeInfo">
        <h2>{cocktailRecipe.name}</h2>
        <h3>Ingredients</h3>
        <ul>
          {ingredientsList}
        </ul>
        <h3>Instructions</h3>
        <p>{cocktailRecipe.instructions}</p>
      </div>
      <div className="recipeImage">
        <img
          src={cocktailRecipe.imageUrl}
          alt="A cocktail"
        />
      </div>
    </div>
  )
};

export default Cocktail;
