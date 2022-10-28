import Cocktail from "./Cocktail";

const CocktailList = (props) => {
  return (
    <ul className="cocktail-list">
      {props.cocktails.map((cocktail) => (
        <Cocktail
          key={cocktail.id}
          id={cocktail.id}
          name={cocktail.name}
          ingredients={cocktail.ingredients}
          instructions={cocktail.instructions}
          imageUrl={cocktail.imageUrl}
          buttonVisibility={props.buttonVisibility}
          deleteCocktailHandler={props.deleteCocktailHandler}
          addFavouriteHandler={props.addFavouriteHandler}
        />
      ))}
    </ul>
  );
};

export default CocktailList;
