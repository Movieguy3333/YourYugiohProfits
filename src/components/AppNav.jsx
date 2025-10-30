import { NavLink } from "react-router-dom";

function AppNav() {
  const navLinkClass = ({ isActive }) => 
    `px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 shadow-xl shadow-amber-500/50 transform scale-110' 
        : 'bg-gray-800/50 text-gray-300 hover:text-amber-400 hover:bg-gray-700/50 hover:shadow-lg'
    }`;

  return (
    <nav className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-transparent backdrop-blur-md border-b border-amber-500/20 shadow-lg">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-6 py-6">
          <li>
            <NavLink to="/app/valuations" className={navLinkClass}>
              📊 Valuation
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/add-to-collection" className={navLinkClass}>
              ➕ Add to Collection
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AppNav;
