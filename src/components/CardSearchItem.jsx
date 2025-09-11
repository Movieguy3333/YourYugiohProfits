/* eslint-disable react/prop-types */
/* 
import { useContext } from "react";
import Button from "./Button";
import { AppContext } from "../contextapi/AppContext";
import styles from "./CardSearchItem.module.css";
import Spinner from "./Spinner";

function CardSearchItem({ card }) {
  const { handleAddToCollection, isLoading } = useContext(AppContext);

  if (isLoading) return <Spinner />;

  return (
    <div className={styles.cardSearchItem}>
      <h3>{card.name}</h3>
      <img
        src={card.card_images[0].image_url}
        alt={card.name}
        className={styles.cardImage}
      />

      <h2>Price: ${card.card_prices[0].tcgplayer_price || "N/A"}</h2>

      <Button
        onClick={function () {
          alert(`Successfully added ${card.name} to collection.`);
          handleAddToCollection;
        }}
        card={card}
      >
        Add To Collection
      </Button>
    </div>
  );
}

export default CardSearchItem;
 */
import { useContext } from "react";
import { AppContext } from "../contextapi/AppContext";
import Button from "./Button";
import Spinner from "./Spinner";
import styles from "./CardSearchItem.module.css";

function CardSearchItem({ card }) {
  const { handleAddToCollection, isLoading } = useContext(AppContext);

  if (isLoading) return <Spinner />;

  const handleClick = () => {
    handleAddToCollection(card); // add card to state
    /*     alert(`Successfully added ${card.name} to your collection.`); */

    // query only when you need it
    const collectionEl = document.getElementById("collection");
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={styles.cardSearchItem}>
      <h3 className={styles["card-name-header"]}>{card.name}</h3>
      <img
        src={card.card_images[0].image_url}
        alt={card.name}
        className={styles.cardImage}
      />
      <h2>Price: ${card.card_prices[0].tcgplayer_price || "N/A"}</h2>

      <Button onClick={handleClick} card={card}>
        Add To Collection
      </Button>
    </div>
  );
}

export default CardSearchItem;
