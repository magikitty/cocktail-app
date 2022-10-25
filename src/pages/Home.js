import FetchCocktailsWithForm from "../Components/FetchCocktailsWithForm";

const Home = () => {
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  return (
    <div>
      <h1>Home</h1>
      <p>Search for a cocktail by name</p>
      <FetchCocktailsWithForm urlApi={apiUrl}/>
    </div>
  )
}

export default Home;
