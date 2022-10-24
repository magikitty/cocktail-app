import FetchCocktails from "../Components/FetchCocktails";
import {useRef, useState} from "react";

const Home = () => {
  // const apiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const apiUrlBase = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const refName = useRef("");
  const [nameSearched, setNameSearched] = useState();

  const submitHandler = (event) => {
    console.log("pressed submit");
    // Prevent default submit behaviour to use custom behaviour
    event.preventDefault();
    setNameSearched(refName.current.value);
    refName.current.value = "";
  };

  let content;
  if (nameSearched) {
    let apiFull = apiUrlBase + nameSearched;
    content = <FetchCocktails urlApi={apiFull} buttonText="Search for cocktail"/>
  } else {
    content = <></>
  }

  return (
    <div>
      <h1>Home</h1>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Cocktail name: </label>
          <textarea id="name" ref={refName}></textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>

      <p>Search for a cocktail</p>
      {content}
    </div>
  )
}

export default Home;
