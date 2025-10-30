/* eslint-disable react/prop-types */

function Button({ children, onClick, card = {}, variant = "primary", className = "" }) {
  const variants = {
    primary: "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 font-bold shadow-lg hover:shadow-amber-500/50 transform hover:scale-105",
    secondary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-blue-500/50 transform hover:scale-105",
    danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/50 transform hover:scale-105",
    ghost: "bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-gray-900 shadow-md transform hover:scale-105"
  };

  return (
    <button 
      className={`${variants[variant]} px-6 py-2.5 rounded-lg transition-all duration-200 ease-in-out ${className}`}
      onClick={() => onClick(card)}
    >
      {children}
    </button>
  );
}

export default Button;
