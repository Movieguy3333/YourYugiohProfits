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

function CardSearchItem({ card }) {
  const { handleAddToCollection, isLoading } = useContext(AppContext);

  if (isLoading) return <Spinner />;

  const handleClick = () => {
    handleAddToCollection(card);
    const collectionEl = document.getElementById("collection");
    if (collectionEl) {
      collectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border-2 border-amber-500/20">
      <h3 className="text-xl font-bold text-amber-400 mb-4 text-center min-h-[3rem] flex items-center justify-center">
        {card.name}
      </h3>
      <div className="flex justify-center mb-4 overflow-hidden rounded-xl">
        <img
          src={card.card_images[0].image_url}
          alt={card.name}
          className="w-full max-h-80 object-contain"
        />
      </div>
      <div className="mb-4 text-center">
        <p className="text-gray-400 text-sm">Current Price</p>
        <p className="text-3xl font-bold text-green-400">
          ${card.card_prices[0].tcgplayer_price || "N/A"}
        </p>
      </div>
      <Button onClick={handleClick} card={card} className="w-full">
        ➕ Add To Collection
      </Button>
    </div>
  );
}

export default CardSearchItem;
