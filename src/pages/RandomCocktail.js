import FetchCocktails from "../Components/FetchCocktails";

const RandomCocktail = () => {
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  return (
    <div>
      <h1>Random Cocktail</h1>
      <FetchCocktails urlApi={apiUrl} buttonText="Get random cocktail"/>
    </div>
  )
}

export default RandomCocktail;
