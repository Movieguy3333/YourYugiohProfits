function Instructions() {
  return (
    <div className="max-w-4xl mx-auto my-12 p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border-2 border-amber-500/20">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
        Welcome to DuelVault
      </h1>
      <h3 className="text-2xl font-semibold text-amber-400 mb-6 text-center">
        🎮 How to Get Started:
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">
            1
          </span>
          <span className="text-gray-300 text-lg">
            Use the search bar to find Yu-Gi-Oh! cards by name.
          </span>
        </li>
        <li className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">
            2
          </span>
          <span className="text-gray-300 text-lg">
            Click the button to add cards to your collection.
          </span>
        </li>
        <li className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">
            3
          </span>
          <span className="text-gray-300 text-lg">
            Set a price alert amount to receive a notification when the card reaches the desired price.
          </span>
        </li>
        <li className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center font-bold text-gray-900">
            4
          </span>
          <span className="text-gray-300 text-lg">
            Make sure price alerts are enabled to allow notifications.
          </span>
        </li>
        <li className="flex items-start gap-4 p-4 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-lg border-2 border-green-500/40 hover:border-green-500/60 transition-all">
          <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center font-bold text-gray-900">
            5
          </span>
          <span className="text-green-400 text-lg font-bold">
            💰 Profit!
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Instructions;
