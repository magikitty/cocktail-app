import {useRef} from "react";
import "./Form.css";

const AddCocktail = (props) => {
  const refName = useRef(null);
  const refIngredients = useRef(null);
  const refInstructions = useRef(null);

  const submitHandler = (event) => {
    console.log("pressed submit");
    // Prevent default submit behaviour to use custom behaviour
    event.preventDefault();

    const cocktail = {
      name: refName.current.value,
      ingredients: refIngredients.current.value,
      instructions: refInstructions.current.value,
    };

    props.onAddCocktail(cocktail);

    refName.current.value = null;
    refIngredients.current.value = null;
    refInstructions.current.value = null;
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Cocktail name: </label><br/>
        <textarea rows="1" cols="50" id="name" ref={refName}></textarea>
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients (write ingredients separated by commas): </label><br/>
        <textarea rows="5" cols="50" id="ingredients" ref={refIngredients}></textarea>
      </div>
      <div>
        <label htmlFor="instructions">Instructions: </label><br/>
        <textarea rows="5" cols="50" id="instructions" ref={refInstructions}></textarea>
      </div>
      <button>Add Cocktail</button>
    </form>
  );
};

export default AddCocktail;
