import React from "react";
import { useTheme } from "../contexts/ThemeProvider";

const Skill = ({ skills }) => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`skills py-5 ${
        isDarkMode
          ? "bg-background-dark text-textLight"
          : "bg-background-light text-textDark"
      }`}
      id="skills"
    >
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Habilidades</h1>
        <div className="row flex justify-between">
          <div className="col-md-4">
            <h2 className="text-xl mb-4">Avanzado</h2>
            {skills.advanced.map((skill, index) => (
              <div key={index} className="mb-6">
                <p className="mb-2">{skill.name}</p>
                <div className="flex">
                  {[...Array(skill.rating)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-6 h-6 rounded-full bg-blue-500 mr-1 ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <h2 className="text-xl mb-4">Intermedio</h2>
            {skills.intermediate.map((skill, index) => (
              <div key={index} className="mb-6">
                <p className="mb-2">{skill.name}</p>
                <div className="flex">
                  {[...Array(skill.rating)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-6 h-6 rounded-full bg-blue-500 mr-1 ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <h2 className="text-xl mb-4">Básico</h2>
            {skills.basic.map((skill, index) => (
              <div key={index} className="mb-6">
                <p className="mb-2">{skill.name}</p>
                <div className="flex">
                  {[...Array(skill.rating)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-6 h-6 rounded-full bg-blue-500 mr-1 ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
