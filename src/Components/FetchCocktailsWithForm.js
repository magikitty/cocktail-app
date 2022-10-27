import {useRef, useState} from "react";

import CocktailList from "../Components/CocktailList";

const FetchCocktailsWithForm = (props) => {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);
  const refName = useRef(null);
  const [nameSearched, setNameSearched] = useState();

  const fetchCocktail = async (event) => {
    console.log("pressed submit");
    // Prevent default submit behaviour to use custom behaviour
    event.preventDefault();
    setNameSearched(refName.current.value);
    console.log("refName: " + refName.current.value);
    console.log("name searched: " + nameSearched);

    setError(null);

    try {
      // Wait for fetch to be resolved
      const response = await fetch(props.urlApi + nameSearched);
      console.log("url: " + props.urlApi + nameSearched);
      console.log("response: " + response);
      const data = await response.json();
      console.log("data : " + data);

      // Check for error and throw error message
      if (!response.ok) {
        throw new Error("Something went wrong...");
      }

      const transformedCocktails = data.drinks.map((cocktailData) => {
        let ingredientsArray = getIngredients(cocktailData);

        console.log("got id: ", cocktailData.idDrink);
        return {
          id: cocktailData.idDrink,
          name: cocktailData.strDrink,
          instructions: cocktailData.strInstructions,
          ingredients: ingredientsArray,
          imageUrl: cocktailData.strDrinkThumb,
        };
      });
      setCocktails(transformedCocktails);
      console.log(data);
    } catch (err) {
      setError(err.message);
    }
    refName.current.value = null;
  };

  const getIngredients = (cocktailData) => {
    let ingredientsArray = [];
    let ingredientNames = getArrayForKey(cocktailData, "strIngredient");
    let ingredientAmounts = getArrayForKey(cocktailData, "strMeasure");

    for (let i = 0; i < ingredientNames.length; i++) {
      let ingredient = ingredientAmounts[i] + " " + ingredientNames[i];
      ingredientsArray.push(ingredient);
    }

    return ingredientsArray;
  }

  // Create array of values for keys containing specified substring
  const getArrayForKey = (cocktailData, keySubstring) => {
    let valuesArray = [];

    // Add ingredients to ingredients array based on key
    Object.keys(cocktailData).forEach(
      function (key) {
        if (key.includes(keySubstring)) {
          if (cocktailData[key] != null) {
            valuesArray.push(cocktailData[key])
          }
        }
      }
    )
    return valuesArray;
  }

  // Show error message or cocktail recipe
  let content;
  if (error) {
    // Only show error if there is a message (error is true)
    content = error && <p>{error}</p>;
  } else {
    content = <CocktailList cocktails={cocktails} buttonVisibility="isHidden"/>;
  }

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Cocktail name: </label>
          <input type="text" id="name" ref={refName}/>
        </div>
        <button onClick={fetchCocktail} type="submit" id="search-btn">search</button>
      </form>
      <section>
        {content}
      </section>
    </div>
  )
}

export default FetchCocktailsWithForm;
