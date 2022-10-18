import {Route, Switch} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import RandomCocktail from "./pages/RandomCocktail";

function App() {
  return (
    <div className="App">
      <h1>Cocktail Collection</h1>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/random">
          <RandomCocktail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
