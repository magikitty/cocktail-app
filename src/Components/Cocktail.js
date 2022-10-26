import "./Cocktail.css";

const Cocktail = (props) => {

  let ingredientsList = props.ingredients.map((ingredientItem) => <li>{ingredientItem}</li>);

  const deleteHandler = () => {
    console.log("Clicked delete for " + props.id);
    props.deleteCocktailHandler(props.id);
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
        <img src={props.imageUrl}/>
      </div>
    </li>
  )
};

export default Cocktail;
