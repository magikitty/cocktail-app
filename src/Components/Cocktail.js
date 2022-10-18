import "./Cocktail.css";

const Cocktail = (props) => {
  const cocktailRecipe = {
    name: props.name,
    ingredients: props.ingredients,
    instructions: props.instructions,
    imageUrl: props.imageUrl
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
