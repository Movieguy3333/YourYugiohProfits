/* eslint-disable react/prop-types */

function Card({ card }) {
  const cardImage =
    card.card_images && card.card_images.length > 0
      ? card.card_images[0].image_url
      : "default-image-url.jpg";

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 transform hover:scale-105">
      <h3 className="text-xl font-bold text-amber-400 mb-4 text-center truncate">{card.name}</h3>
      <div className="flex justify-center mb-4">
        <img
          src={cardImage}
          alt={card.name}
          className="w-full max-h-64 object-contain rounded-lg shadow-md"
        />
      </div>
      <p className="text-gray-300 text-center">
        <span className="text-amber-500 font-semibold">Price:</span>{" "}
        <span className="text-green-400 font-bold text-lg">
          ${card.card_prices[0].tcgplayer_price || "N/A"}
        </span>
      </p>
    </div>
  );
}

export default Card;
