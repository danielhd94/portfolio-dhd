import React from "react";
import {
  FaBookmark,
  FaCode,
  FaDatabase,
  FaTerminal,
  FaGlobe,
  FaFolder,
  FaServer,
} from "react-icons/fa";
import { useTheme } from "../contexts/ThemeProvider";
import Skill from "./Skill";
import { skills } from "../data/skills";

function Skills() {
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
        <Skill skills={skills} />
        <div className="row">
          <h2 className="mb-4">Lenguajes de Programación y Frameworks</h2>
          <div className="col-lg-6 col-12">
            <div className="skills-list">
              <h3>Avanzado</h3>
              <ul className="list-disc pl-4">
                <li>
                  <FaCode className="h-5 w-5 inline mr-2" /> Java
                </li>
                <li>
                  <FaServer className="h-5 w-5 inline mr-2" /> C#
                </li>
                <li>
                  <FaCode className="h-5 w-5 inline mr-2" /> JavaScript
                </li>
                <li>
                  <FaFolder className="h-5 w-5 inline mr-2" /> Bootstrap
                </li>
                <li>
                  <FaDatabase className="h-5 w-5 inline mr-2" /> MySQL
                </li>
                <li>
                  <FaDatabase className="h-5 w-5 inline mr-2" /> SQL Server
                </li>
              </ul>
            </div>

            <div className="skills-list">
              <h3>Intermedio</h3>
              <ul className="list-disc pl-4">
                <li>
                  <FaGlobe className="h-5 w-5 inline mr-2" /> HTML5
                </li>
                <li>
                  <FaGlobe className="h-5 w-5 inline mr-2" /> CSS3
                </li>
                <li>
                  <FaServer className="h-5 w-5 inline mr-2" /> Node.js
                </li>
                <li>
                  <FaBookmark className="h-5 w-5 inline mr-2" /> React.js
                </li>
                <li>
                  <FaGlobe className="h-5 w-5 inline mr-2" /> Git
                </li>
                <li>
                  <FaTerminal className="h-5 w-5 inline mr-2" /> Bash Script
                  (Unix)
                </li>
              </ul>
            </div>

            <div className="skills-list">
              <h3>Básico</h3>
              <ul className="list-disc pl-4">
                <li>
                  <FaGlobe className="h-5 w-5 inline mr-2" /> Amazon S3
                </li>
                <li>
                  <FaBookmark className="h-5 w-5 inline mr-2" /> JIRA
                </li>
                <li>
                  <FaFolder className="h-5 w-5 inline mr-2" /> Bitbucket
                </li>
                <li>
                  <FaFolder className="h-5 w-5 inline mr-2" /> GitLab
                </li>
                <li>
                  <FaFolder className="h-5 w-5 inline mr-2" /> Docker
                </li>
              </ul>
            </div>
          </div>

          {/* Otras secciones */}
        </div>
      </div>
    </section>
  );
}

export default Skills;
