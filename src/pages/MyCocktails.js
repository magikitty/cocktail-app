import {useEffect, useState} from "react";

import CocktailList from "../Components/CocktailList";
import AddCocktail from "../Components/AddCocktail";
import Footer from "../layout/Footer";

const MyCocktails = (props) => {
  const [cocktails, setCocktails] = useState([]);
  const urlDatabase = "https://cocktail-app-12a4c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json";

  const addCocktailHandler = async (cocktail) => {
    console.log(cocktail);
    // default method is GET, so need to specify when POST
    const response = await fetch(
      urlDatabase,
      {
        method: "POST",
        body: JSON.stringify(cocktail),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("POST data: " + data);
  };

  const deleteCocktailHandler = async (cocktailId) => {
    let urlDelete = "https://cocktail-app-12a4c-default-rtdb.europe-west1.firebasedatabase.app/recipes/" + cocktailId + ".json";
    console.log(cocktailId);
    // default method is GET, so need to specify when DELETE
    const response = await fetch(
      urlDelete,
      {
        method: "DELETE",
        body: null,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log("DELETE data: " + data);
  };

  const fetchCocktailsDatabase = async () => {
    const response = await fetch(
      urlDatabase
    );
    const data = await response.json();

    const fetchedCocktails = [];

    for (const key in data) {
      fetchedCocktails.push({
        id: key,
        name: data[key].name,
        ingredients: getIngredientsArray(data[key].ingredients),
        instructions: data[key].instructions,
      });
    }

    setCocktails(fetchedCocktails);
  };

  // Split string at "," and add create array
  const getIngredientsArray = (ingredientsString) => {
    return ingredientsString.split(",");
  }

  // Called when component is evaluated, no need for separate fetching button
  useEffect(() => {
    fetchCocktailsDatabase();
  }, [fetchCocktailsDatabase]);

  return (
    <div>
      <h1>My Cocktails</h1>
      <h3>Add your own cocktail recipes and view your saved cocktails</h3>
      <img
        className="page-cocktail-img"
        src="https://www.thecocktaildb.com/images/media/drink/hyztmx1598719265.jpg"
        alt="A cocktail"/>
      <AddCocktail onAddCocktail={addCocktailHandler}/>
      <CocktailList
        cocktails={cocktails}
        deleteCocktailHandler={deleteCocktailHandler}
        buttonVisibility="isVisible"
        buttonVisibilityFavourite="isVisible"
        addFavouriteHandler={props.addFavouriteHandler}
      />
      <Footer/>
    </div>
  )
};

export default MyCocktails;
