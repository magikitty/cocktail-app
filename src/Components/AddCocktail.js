import {useRef} from "react";

const AddCocktail = (props) => {
  const refName = useRef("");
  const refIngredients = useRef("");
  const refInstructions = useRef("");

  const submitHandler = (event) => {
    console.log("pressed submit");
    // Prevent default submit behaviour to use custom behaviour
    event.preventDefault();

    // let idUnique = (new Date()).getTime();

    const cocktail = {
      name: refName.current.value,
      ingredients: refIngredients.current.value,
      instructions: refInstructions.current.value,
    };

    props.onAddCocktail(cocktail);

    refName.current.value = "";
    refIngredients.current.value = "";
    refInstructions.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">Cocktail name: </label>
        <textarea id="name" ref={refName}></textarea>
      </div>
      <p>Write ingredients separated by commas.</p>
      <div>
        <label htmlFor="ingredients">Ingredients: </label>
        <textarea rows="5" id="ingredients" ref={refIngredients}></textarea>
      </div>
      <div>
        <label htmlFor="instructions">Instructions: </label>
        <textarea rows="5" id="instructions" ref={refInstructions}></textarea>
      </div>
      <button>Add Cocktail</button>
    </form>
  );
};

export default AddCocktail;
