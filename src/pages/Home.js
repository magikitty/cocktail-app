import FetchCocktailsWithForm from "../Components/FetchCocktailsWithForm";
import "../Components/Form.css";
import Footer from "../layout/Footer";

const Home = (props) => {
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome to the Cocktail Corner!</h2>
      <img
        className="page-cocktail-img"
        src="https://www.thecocktaildb.com/images/media/drink/0108c41576797064.jpg"
        alt="A cocktail"/>
      <h3>Search for cocktail recipes by name</h3>
      <FetchCocktailsWithForm urlApi={apiUrl} addFavouriteHandler={props.addFavouriteHandler}/>
      <Footer/>
    </div>
  )
}

export default Home;
