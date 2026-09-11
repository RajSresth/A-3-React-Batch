import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-25 w-screen bg-gray-200">
      <div className="w-full max-w-300 h-full mx-auto flex justify-between items-center">
        <NavLink to="/">
          <div className="text-2xl font-semibold tracking-wider">LOGO</div>
        </NavLink>
        <nav className="flex gap-5 font-semibold text-lg tracking-wide">
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-400 text-white rounded-xl py-1.5 px-5"
                : "py-1.5 px-5"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? `bg-blue-400 text-white rounded-xl py-1.5 px-5`
                : "py-1.5 px-5"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? `bg-blue-400 text-white rounded-xl py-1.5 px-5`
                : "py-1.5 px-5"
            }
          >
            Cart
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `bg-blue-400 text-white rounded-xl py-1.5 px-5`
                : "py-1.5 px-5"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
