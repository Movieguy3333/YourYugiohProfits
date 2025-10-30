/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { AppContext } from "../contextapi/AppContext";

function CollectionItem({ card }) {
  const { user } = useContext(AppContext);
  const [updatedCardPrice, setUpdatedCardPrice] = useState(null);
  const [alertsOn, setAlertsOn] = useState(card.card_price_alert);
  const [priceAlertAmount, setPriceAlertAmount] = useState(
    card.card_price_alert_amount
  );

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await fetch(
          `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
            card.name
          )}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const price = data.data[0].card_prices[0].tcgplayer_price;
          setUpdatedCardPrice(price);
        }
      } catch (error) {
        console.error("Error fetching updated price:", error);
      }
    }

    fetchCards();
  }, [card.name]);

  function toggleAlertsOn() {
    setAlertsOn(() => !alertsOn);
    handleSetPriceAlert(card, !alertsOn);
  }

  const {
    handleAddToCollection,
    handleDeleteFromCollection,
    handleSetPriceAlertAmount,
    handleSetPriceAlert,
  } = useContext(AppContext);

  const priceChange = updatedCardPrice && card.card_prices[0].tcgplayer_price 
    ? ((updatedCardPrice - card.card_prices[0].tcgplayer_price) / card.card_prices[0].tcgplayer_price * 100).toFixed(2)
    : 0;

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-xl border-2 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Card Image Section */}
        <div className="flex-shrink-0">
          <h3 className="text-xl font-bold text-amber-400 mb-3 text-center md:text-left">{card.name}</h3>
          <div className="relative flex items-center justify-center">
            <img
              src={card.card_images[0].image_url}
              alt={card.name}
              className="w-40 h-auto max-h-40 md:w-48 md:max-h-64 object-contain rounded-lg shadow-lg"
            />
            <div
              className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-gray-900 ${
                alertsOn ? 'bg-green-500 animate-pulse' : 'bg-gray-600'
              }`}
              title={alertsOn ? "Alerts Enabled" : "Alerts Disabled"}
            ></div>
          </div>

          {/* Price Info */}
          <div className="mt-4 space-y-2 bg-gray-900/50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Initial Price:</span>
              <span className="text-white font-semibold">${card.card_prices[0].tcgplayer_price || "N/A"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400 text-sm">Current Price:</span>
              <span className="text-green-400 font-semibold">${updatedCardPrice || "N/A"}</span>
            </div>
            {priceChange !== 0 && (
              <div className={`text-center text-sm font-bold ${priceChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                {priceChange > 0 ? '📈' : '📉'} {priceChange > 0 ? '+' : ''}{priceChange}%
              </div>
            )}
            <div className="flex justify-between items-center pt-2 border-t border-gray-700">
              <span className="text-gray-400 text-sm">Quantity:</span>
              <span className="text-amber-400 font-bold text-lg">{card.card_quantity || "N/A"}</span>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex gap-2 mt-4">
            <Button onClick={handleDeleteFromCollection} card={card} variant="danger" className="flex-1">
              -
            </Button>
            <Button onClick={handleAddToCollection} card={card} className="flex-1">
              +
            </Button>
          </div>
        </div>

        {/* Price Alert Section */}
        <div className="flex-1 space-y-4">
          <div className="bg-gray-900/50 p-4 rounded-lg space-y-3">
            <h4 className="text-lg font-semibold text-amber-400 mb-3">💰 Price Alerts</h4>
            
            <div className="space-y-2">
              <label className="block text-gray-300 text-sm font-semibold">Alert Price ($)</label>
              <input
                type="number"
                min="0"
                step="1"
                placeholder="Enter target price..."
                value={priceAlertAmount}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || (/^\d+$/.test(value) && Number(value) >= 0)) {
                    setPriceAlertAmount(value);
                  }
                }}
                className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <Button
              onClick={() => handleSetPriceAlertAmount(card, priceAlertAmount)}
              className="w-full"
              variant="secondary"
            >
              Set Price Alert
            </Button>

            <Button onClick={toggleAlertsOn} className="w-full" variant={alertsOn ? "danger" : "primary"}>
              {alertsOn ? "🔕 Disable Alerts" : "🔔 Enable Alerts"}
            </Button>

            {/* Alert Status */}
            <div className="mt-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300 mb-2">
                <span className="font-semibold">Status:</span>{" "}
                <span className={alertsOn ? "text-green-400" : "text-red-400"}>
                  {alertsOn ? "✓ Enabled" : "✗ Disabled"}
                </span>
              </p>
              
              {alertsOn && Number(priceAlertAmount) > Number(card.card_prices[0].tcgplayer_price) ? (
                <p className="text-xs text-gray-400 bg-blue-900/20 border border-blue-500/30 p-2 rounded">
                  📧 You will get an email notification when {card.name} reaches ${priceAlertAmount}
                </p>
              ) : !alertsOn && Number(priceAlertAmount) > Number(card.card_prices[0].tcgplayer_price) ? (
                <p className="text-xs text-yellow-400 bg-yellow-900/20 border border-yellow-500/30 p-2 rounded">
                  ⚠️ Alerts are disabled
                </p>
              ) : (
                <p className="text-xs text-red-400 bg-red-900/20 border border-red-500/30 p-2 rounded">
                  ❌ Target price must be higher than initial price
                </p>
              )}
              
              {!user && alertsOn && (
                <p className="text-xs text-orange-400 bg-orange-900/20 border border-orange-500/30 p-2 rounded mt-2">
                  ⚠️ Note: Must be logged in to receive email notifications
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
