/* eslint-disable react/prop-types */

import CardSearchItem from "./CardSearchItem";

function CardSearchResult({ cardSearchResults, query }) {
  return (
    <div className="container mx-auto px-4 mb-12">
      {cardSearchResults.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {cardSearchResults.map((card) => (
            <CardSearchItem card={card} key={card.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          {!query ? (
            <div className="space-y-4">
              <div className="text-6xl">🔍</div>
              <h2 className="text-2xl font-bold text-amber-400">Start Your Search</h2>
              <p className="text-gray-400">Enter a card name to find Yu-Gi-Oh! cards</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-6xl">❌</div>
              <h2 className="text-2xl font-bold text-red-400">No Cards Found</h2>
              <p className="text-gray-400">
                <span className="text-amber-400 font-semibold">{query}</span> is not a valid card name
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CardSearchResult;
