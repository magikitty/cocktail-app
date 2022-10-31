import {Route, Switch} from "react-router-dom";

import './styling/App.css';
import Home from "./pages/Home";
import RandomCocktail from "./pages/RandomCocktail";
import NavigationBar from "./layout/NavigationBar";
import MyCocktails from "./pages/MyCocktails";
import Favourites from "./pages/Favourites";

const urlDatabase = "https://cocktail-app-12a4c-default-rtdb.europe-west1.firebasedatabase.app/favourites.json";

const addFavouriteHandler = async (cocktail) => {
  console.log("adding to favourites: " + cocktail);
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

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Switch>
        <Route path="/" exact>
          <Home addFavouriteHandler={addFavouriteHandler}/>
        </Route>
        <Route path="/random-cocktail">
          <RandomCocktail addFavouriteHandler={addFavouriteHandler}/>
        </Route>
        <Route path="/my-cocktails">
          <MyCocktails addFavouriteHandler={addFavouriteHandler}/>
        </Route>
        <Route path="/favourites">
          <Favourites/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
