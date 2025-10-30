/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
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
      const controller = new AbortController();
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
    <div className="text-center my-8">
      <div className="relative max-w-2xl mx-auto">
        <input
          className="w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-amber-500/30 rounded-2xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all duration-300 shadow-lg"
          type="text"
          placeholder="🔍 Search Yu-Gi-Oh! cards..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {isLoading && (
            <div className="w-8 h-8 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardSearchBar;
