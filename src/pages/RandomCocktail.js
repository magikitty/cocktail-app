import FetchCocktails from "../Components/FetchCocktails";
import Footer from "../layout/Footer";

const RandomCocktail = (props) => {
  const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

  return (
    <div>
      <h1>Random Cocktail</h1>
      <p>Feeling lucky?</p>
      <img
        className="page-cocktail-img"
        src="https://www.thecocktaildb.com/images/media/drink/uyrvut1479473214.jpg"
        alt="A cocktail"/>
      <FetchCocktails urlApi={apiUrl} buttonText="Get random cocktail" addFavouriteHandler={props.addFavouriteHandler}/>
      <Footer/>
    </div>
  )
}

export default RandomCocktail;
