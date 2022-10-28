import "./Cocktail.css";

const Cocktail = (props) => {

  let ingredientsList = props.ingredients.map((ingredientItem) => <li>{ingredientItem}</li>);

  const deleteHandler = () => {
    console.log("Clicked delete for " + props.id);
    props.deleteCocktailHandler(props.id);
  }

  const favouriteHandler = () => {
    console.log("Clicked favourite for " + props.id);
    let cocktail = {
      name: props.name,
      ingredients: props.ingredients,
      instructions: props.instructions,
      imageUrl: props.imageUrl,
    };
    props.addFavouriteHandler(cocktail);
  }

  return (
    <li key={props.id}>
      <div className="cocktail">
        <div className="recipeInfo">
          <h2>{props.name}</h2>
          <h3>Ingredients</h3>
          <ul>
            {ingredientsList}
          </ul>
          <h3>Instructions</h3>
          <p>{props.instructions}</p>
        </div>
        <button onClick={deleteHandler} className={props.buttonVisibility}>
          Delete
        </button>
        <button onClick={favouriteHandler} className={props.buttonVisibilityFavourite}>
          Favourite
        </button>
        <img src={props.imageUrl} alt=""/>
      </div>
    </li>
  )
};

export default Cocktail;
