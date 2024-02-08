import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

function About() {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="about"
      className={`py-8 ${
        isDarkMode
          ? "bg-backgroundDark text-textLight"
          : "bg-backgroundLight text-textDark"
      } min-h-screen`}
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
            <img
              src="images/undraw/developer.svg"
              alt="Developer Illustration"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Daniel Hernández</h2>
            <p className="text-lg">
              Desarrollador Full Stack Innovador | Java | Spring Boot | .NET
              Core | JavaScript | MERN | TypeScript
            </p>
            <div className="flex flex-col lg:flex-row justify-center mt-8">
              <a
                href="#contact"
                className={`bg-secondary text-textLight font-medium rounded-full text-sm px-6 py-3 hover:bg-accent ${
                  isDarkMode ? "hover:bg-secondary" : "hover:bg-accentHover"
                } lg:mr-4 mb-4 lg:mb-0`}
              >
                Contactar
              </a>
              <a
                href="#projects"
                className={`text-textDark border border-border rounded-full text-sm px-6 py-3 ${
                  isDarkMode
                    ? "hover:bg-backgroundDark hover:text-textLight"
                    : "hover:bg-backgroundLight hover:text-textDark"
                } lg:ml-4`}
              >
                Proyectos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
