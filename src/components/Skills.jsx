import React from "react";
import { useTheme } from "../contexts/ThemeProvider";
import { skills } from "../data/skills";
import { StarRating } from "./StarRating";

const Skills = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`skills p-20 ${
        isDarkMode
          ? "bg-backgroundDark text-textLight"
          : "bg-backgroundLight text-textDark"
      }`}
      id="skills"
    >
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">Habilidades</h1>
        <div className="row flex justify-between">
          <div className="col-md-4">
            <h2 className="text-xl font-medium mb-4">Avanzado</h2>
            {skills.advanced.map((skill, index) => (
              <div key={index} className="mb-6">
                <p className="mb-1">{skill.name}</p>
                <div className="flex">
                  <StarRating rating={skill.rating} isDarkMode={isDarkMode} />
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <h2 className="text-xl font-medium mb-4">Intermedio</h2>
            {skills.intermediate.map((skill, index) => (
              <div key={index} className="mb-6">
                <p className="mb-1">{skill.name}</p>
                <div className="flex">
                  <StarRating rating={skill.rating} isDarkMode={isDarkMode} />
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <h2 className="text-xl font-medium mb-4">Básico</h2>
            {skills.basic.map((skill, index) => (
              <div key={index} className="mb-6">
                <p className="mb-1 font-light">{skill.name}</p>
                <div className="flex">
                  <StarRating rating={skill.rating} isDarkMode={isDarkMode} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
