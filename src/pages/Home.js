import Cocktail from "../Components/Cocktail";

const Home = () => {
  return (
   <div>
     <h1>Home</h1>
     <Cocktail
       name={"Special Drink"}
       instructions={["4 cl vodka", "150 ml special juice"]}
       ingredients={["4 cl vodka", "150 ml special juice"]}
       imageUrl={"https://www.thecocktaildb.com/images/media/drink/uuytrp1474039804.jpg"}
     />
   </div>
  )
}

export default Home;
