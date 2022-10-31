import {Link} from "react-router-dom";

import "../styling/NavAndFooter.css";

const NavigationBar = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/random-cocktail">Random Cocktail</Link>
          </li>
          <li>
            <Link to="/my-cocktails">My Cocktails</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <p className="title">&#127864; Cocktail Corner &#127864;</p>
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar;
