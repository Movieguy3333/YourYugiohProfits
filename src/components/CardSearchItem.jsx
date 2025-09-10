/* eslint-disable react/prop-types */

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

      <Button onClick={handleAddToCollection} card={card}>
        Add To Collection
      </Button>
    </div>
  );
}

export default CardSearchItem;
