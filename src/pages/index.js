import React from "react";

import Project from "../components/project";

export default () => (
  <main>
    <p>Hey, here's a list of little web projects and stuff.</p>
    <ul className="project-list">
      <li>
        <Project title="React Game of Life" url="http://life.eyehack.com/">
          <p>Conway's Game of Life, built with React.</p>
        </Project>
      </li>
      <li>
        <Project title="CS Binds" url="http://csbinds.eyehack.com/">
          <p>
            Visualize key binds from CS:GO config files (and other source engine
            games).
          </p>
        </Project>
      </li>
      <li>
        <Project title="Any Wizard" url="https://twitter.com/anywizard">
          <p>
            Twitter bot that generates randomized images and text. Built in
            Python.
          </p>
        </Project>
      </li>
    </ul>
  </main>
);
