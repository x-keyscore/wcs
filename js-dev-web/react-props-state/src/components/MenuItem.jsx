import { useState } from "react";


function MenuItem(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  function handleFavorite() {
    setIsFavorite((isFavorite) => !isFavorite);
  }

  return (
    <section key={props.key} className="itemContainer">
      <figure className="imgContainer">
        <img src={props.foodImage} alt={props.itemName} />
        <figcaption>
          <h2>{props.itemName}</h2>
          <p>{props.description}</p>
        </figcaption>
      </figure>
      <aside>{props.price} EUR</aside>
      <button 
        type="button"
        onClick={() => handleFavorite()}
      >
        {isFavorite ? "❤️" : "🖤"}
      </button>
    </section>
  );
}

export default MenuItem;