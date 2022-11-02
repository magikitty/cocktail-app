import React, {
  lazy,
  Suspense,
  useRef,
} from 'react';

import useIntersectionObserver from "./useIntersectionObserver";

// Load component dynamically to allow for lazy loading
const Cocktail = lazy(() => import("./Cocktail"));

const CocktailList = (props) => {
  const cocktailLazy = useRef(null);
  const isCocktailVisible = useIntersectionObserver(cocktailLazy);

  // Show section containing list only if isCocktailVisible is true -> i.e. component is in viewport
  return (
    <section ref={cocktailLazy}>
      {isCocktailVisible && (
        <Suspense fallback={<div>Loading cocktails...</div>}>
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
                buttonVisibilityFavourite={props.buttonVisibilityFavourite}
                deleteCocktailHandler={props.deleteCocktailHandler}
                addFavouriteHandler={props.addFavouriteHandler}
              />
            ))}
          </ul>
        </Suspense>
      )}
    </section>
  );
};

export default CocktailList;
