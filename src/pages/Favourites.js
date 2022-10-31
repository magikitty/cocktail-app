import {useEffect, useState} from "react";
import CocktailList from "../Components/CocktailList";
import "../styling/Cocktail.css";
import Footer from "../layout/Footer";

const Favourites = () => {
  const [cocktails, setCocktails] = useState([]);
  const urlDatabase = "https://cocktail-app-12a4c-default-rtdb.europe-west1.firebasedatabase.app/favourites.json";

  const deleteFavouriteHandler = async (cocktailId) => {
    let urlDelete = "https://cocktail-app-12a4c-default-rtdb.europe-west1.firebasedatabase.app/favourites/" + cocktailId + ".json";
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
        ingredients: data[key].ingredients,
        instructions: data[key].instructions,
        imageUrl: data[key].imageUrl,
      });
    }

    setCocktails(fetchedCocktails);
  };

  // Called when component is evaluated, no need for separate fetching button
  useEffect(() => {
    fetchCocktailsDatabase();
  }, [fetchCocktailsDatabase]);

  return (
    <div>
      <h1>Favourites</h1>
      <h2>View your favourite cocktails</h2>
      <CocktailList
        cocktails={cocktails}
        deleteCocktailHandler={deleteFavouriteHandler}
        buttonVisibility="isVisible"
        buttonVisibilityFavourite="isHidden"
      />
      <Footer/>
    </div>
  )
}

export default Favourites;
