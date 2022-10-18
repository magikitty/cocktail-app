import {Link} from "react-router-dom";

import "./NaviationBar.css";

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
        </ul>
      </nav>
    </header>
  )
}

export default NavigationBar;
