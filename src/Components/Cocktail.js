import "./Cocktail.css";

const Cocktail = (props) => {
  let ingredientsList = props.ingredients.map((ingredientItem) => <li>{ingredientItem}</li>);

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
        <img
          src={props.imageUrl}
          alt="A cocktail"
        />
        <button className={props.buttonVisibility}>DELETE</button>
      </div>
    </li>
  )
};

export default Cocktail;
