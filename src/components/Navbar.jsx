import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

export default function Navbar() {
  const { isDarkMode } = useTheme();

  return (
    <nav
      className={`flex flex-col lg:flex-row lg:items-center lg:justify-between ${
        isDarkMode
          ? "bg-background-dark text-white"
          : "bg-background-light text-black"
      } lg:space-x-4`}
    >
      <div className="flex flex-row items-center justify-between px-4 py-2 lg:p-0 lg:space-x-4">
        <div>
          <a
            href="#about"
            className={`hover:${
              isDarkMode ? "text-blue-300" : "text-blue-500"
            }`}
          >
            Acerca de
          </a>
        </div>
        <div>
          <a
            href="#project"
            className={`hover:${
              isDarkMode ? "text-blue-300" : "text-blue-500"
            }`}
          >
            Proyectos
          </a>
        </div>
      </div>
      {/* Separar opciones en una nueva fila en pantallas grandes */}
      <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-between px-4 py-2 lg:p-0 lg:space-x-4">
        <div>
          <a
            href="#skills"
            className={`hover:${
              isDarkMode ? "text-blue-500" : "text-blue-300"
            }`}
          >
            Habilidades
          </a>
        </div>
        <div>
          <a
            href="#contact"
            className={`hover:${
              isDarkMode ? "text-blue-500" : "text-blue-300"
            }`}
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
