import { useContext, useMemo } from "react";
import { AppContext } from "../contextapi/AppContext";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Valuations() {
  const { collection } = useContext(AppContext);

  const totalCollectionValue = useMemo(() => {
    if (collection.length === 0) return null;

    const total = collection.reduce((sum, card) => {
      const price = Number(card.card_prices[0].tcgplayer_price);
      const quantity = Number(card.card_quantity);
      return sum + price * quantity;
    }, 0);

    return Math.round(total);
  }, [collection]);

  const priceTiers = useMemo(() => {
    if (collection.length === 0) return null;

    const tiers = {
      "<$1": 0,
      "$1–$5": 0,
      "$5–$20": 0,
      ">$20": 0,
    };

    collection.forEach((card) => {
      const price = Number(card.card_prices[0].tcgplayer_price);
      const quantity = Number(card.card_quantity);

      if (price < 1) tiers["<$1"] += quantity;
      else if (price <= 5) tiers["$1–$5"] += quantity;
      else if (price <= 20) tiers["$5–$20"] += quantity;
      else tiers[">$20"] += quantity;
    });

    return tiers;
  }, [collection]);

  const pieChartData = useMemo(() => {
    if (!priceTiers) return null;

    return {
      labels: Object.keys(priceTiers),
      datasets: [
        {
          label: "Card Quantity",
          data: Object.values(priceTiers),
          backgroundColor: ["#FFD700", "#00BFFF", "#32CD32", "#FF4500"],
          borderColor: "#1f2937",
          borderWidth: 4,
        },
      ],
    };
  }, [priceTiers]);

  const highestValueCard = useMemo(() => {
    if (collection.length === 0) return null;

    return collection.reduce((maxCard, currentCard) =>
      Number(currentCard.card_prices[0].tcgplayer_price) >
      Number(maxCard.card_prices[0].tcgplayer_price)
        ? currentCard
        : maxCard
    );
  }, [collection]);

  const totalCards = useMemo(() => {
    if (collection.length === 0) return null;

    const total = collection.reduce((sum, card) => {
      const quantity = Number(card.card_quantity);
      return sum + quantity;
    }, 0);

    return Math.round(total);
  }, [collection]);

  return (
    <div className="container mx-auto px-4 py-8">
      {collection.length > 0 ? (
        <div className="space-y-8">
          {/* Value Header */}
          <div className="text-center space-y-4 bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-8 rounded-2xl border-2 border-green-500/50 shadow-2xl">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              💰 ${totalCollectionValue}
            </h1>
            <p className="text-2xl text-gray-300">Total Collection Value</p>
            <p className="text-xl text-gray-400">
              You have <span className="text-amber-400 font-bold">{totalCards}</span> cards in your collection
            </p>
          </div>

          {/* Chart and Highest Value Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-amber-500/20">
              <h2 className="text-3xl font-bold text-amber-400 mb-6 text-center">
                📊 Card Value Distribution
              </h2>
              <div className="max-w-md mx-auto">
                <Pie 
                  data={pieChartData}
                  options={{
                    plugins: {
                      legend: {
                        labels: {
                          color: '#d1d5db',
                          font: {
                            size: 14,
                            weight: 'bold'
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>

            {/* Highest Value Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border-2 border-amber-500/20">
              <h3 className="text-3xl font-bold text-amber-400 mb-6 text-center">
                👑 Highest Value Card
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={highestValueCard.card_images[0].image_url}
                  alt={highestValueCard.name}
                  className="w-full max-w-xs rounded-lg shadow-2xl border-2 border-amber-500/30"
                />
                <p className="text-xl font-bold text-amber-400 text-center">
                  {highestValueCard.name}
                </p>
                <p className="text-3xl font-bold text-green-400">
                  ${highestValueCard.card_prices[0].tcgplayer_price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="text-8xl mb-6">📦</div>
          <h1 className="text-4xl font-bold text-gray-400 mb-4">
            No collection to evaluate...
          </h1>
          <p className="text-xl text-gray-500">
            Add some cards to your collection to see valuations!
          </p>
        </div>
      )}
    </div>
  );
}

export default Valuations;
