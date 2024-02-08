import React from "react";

export default function Navbar() {
  return (
    <nav className="flex items-center space-x-4">
      <a href="#about" className="hover:text-blue-500">
        Acerca de
      </a>
      <a href="#project" className="hover:text-blue-500">
        Proyectos
      </a>
      <a href="#skills" className="hover:text-blue-500">
        Habilidades
      </a>
      <a href="#contact" className="hover:text-blue-500">
        Contacto
      </a>
    </nav>
  );
}
