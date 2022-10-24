import FetchCocktails from "../Components/FetchCocktails";

const Home = () => {
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

  return (
    <div>
      <h1>Home</h1>
      <p>Search for a cocktail</p>
      <FetchCocktails urlApi={apiUrl} buttonText="Search for cocktail"/>
    </div>
  )
}

export default Home;
