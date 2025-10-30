import { useContext, useState } from "react";
import CollectionItem from "./CollectionItem";
import { AppContext } from "../contextapi/AppContext";

function Collection() {
  const { collection, user } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCollection = collection.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
        {user ? `${user.username}'s Collection` : "Your Collection"}
      </h1>

      {collection.length !== 0 && (
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          <h2 className="text-2xl font-semibold text-amber-400 text-center">Search Collection</h2>
          <input
            type="text"
            placeholder="🔍 Search your cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-amber-500/30 rounded-2xl text-white text-lg placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 transition-all duration-300 shadow-lg"
          />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" id="collection">
        {filteredCollection.length !== 0 ? (
          filteredCollection.map((card) => (
            <CollectionItem key={card.id} card={card} />
          ))
        ) : (
          <div className="col-span-full text-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <p className="text-2xl text-gray-400">No cards in collection...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Collection;
