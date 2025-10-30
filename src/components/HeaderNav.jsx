import { NavLink } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "../contextapi/AppContext";

function HeaderNav() {
  const { user, setCollection, setUser } = useContext(AppContext);
  
  const navLinkClass = ({ isActive }) => 
    `px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
      isActive 
        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 shadow-lg shadow-amber-500/50 transform scale-105' 
        : 'text-gray-300 hover:text-amber-400 hover:bg-gray-800/50'
    }`;

  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-t border-b border-amber-500/10">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-4">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/app/add-to-collection" className={navLinkClass}>
              Collection
            </NavLink>
          </li>
          {!user ? (
            <>
              <li>
                <NavLink to="/sign-up" className={navLinkClass}>
                  Sign-up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={navLinkClass}>
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="account" className={navLinkClass}>
                  Account
                </NavLink>
              </li>
              <li>
                <Button
                  variant="danger"
                  onClick={() => {
                    setCollection([]);
                    setUser(null);
                  }}
                >
                  Logout
                </Button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default HeaderNav;
