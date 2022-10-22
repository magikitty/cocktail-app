import {Route, Switch} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import RandomCocktail from "./pages/RandomCocktail";
import NavigationBar from "./Components/NavigationBar";
import MyCocktails from "./pages/MyCocktails";

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/random-cocktail">
          <RandomCocktail/>
        </Route>
        <Route path="/my-cocktails">
          <MyCocktails/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
