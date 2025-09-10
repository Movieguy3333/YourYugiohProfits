/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import styles from "./CardSearchBar.module.css";
import { AppContext } from "../contextapi/AppContext";
import Spinner from "./Spinner";

function CardSearchBar({ setCardSearchResults, query, setQuery }) {
  const { isLoading, setIsLoading } = useContext(AppContext);

  useEffect(() => {
    if (!query.trim()) {
      setCardSearchResults([]);
      return;
    }

    const debounceTimeout = setTimeout(() => {
      const controller = new AbortController(); // optional: cancel old fetches
      const signal = controller.signal;

      async function fetchCards() {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
              query
            )}`,
            { signal }
          );

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const data = await response.json();

          if (data.data && data.data.length > 0) {
            setCardSearchResults(data.data);
          } else {
            setCardSearchResults([]);
          }
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Error fetching cards:", error);
            setCardSearchResults([]);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchCards();

      return () => controller.abort();
    }, 200);

    return () => clearTimeout(debounceTimeout);
  }, [query, setCardSearchResults, setIsLoading]);

  return (
    <div className={styles.cardSearchBar}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search cards..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default CardSearchBar;
