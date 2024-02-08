import React from "react";
import Navbar from "./Navbar";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeProvider";

function Header() {
  const { isDarkMode, toggleColorMode } = useTheme();

  return (
    <header
      className={
        isDarkMode
          ? "bg-gray-800 text-white py-4"
          : "bg-gray-200 text-black py-4"
      }
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Navbar />
          <div className="ml-4">
            <button
              className="color-mode flex items-center"
              onClick={toggleColorMode}
            >
              {isDarkMode ? (
                <FaSun className="color-mode-icon" />
              ) : (
                <FaMoon className="color-mode-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
