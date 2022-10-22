import CocktailList from "../Components/CocktailList";

const MyCocktails = () => {
  const listCocktails = [
    {
      id: "1",
      name: "Special Drink",
      instructions: "Mix it.",
      ingredients: ["4 cl vodka", "150 ml special juice"],
      imageUrl: "https://www.thecocktaildb.com/images/media/drink/uuytrp1474039804.jpg",
    },
    {
      id: "2",
      name: "Fun Drink",
      instructions: "Shake it.",
      ingredients: ["4 cl vodka", "150 ml fun juice"],
      imageUrl: "https://www.thecocktaildb.com/images/media/drink/g12lj41493069391.jpg",
    },
  ];

  return (
    <div>
      <h1>My Cocktails</h1>
      <CocktailList cocktails={listCocktails}/>
    </div>
  )
}

export default MyCocktails;
