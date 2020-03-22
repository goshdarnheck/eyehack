import React from "react"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import Project from "../components/project"

export default () => (
  <Layout>
    <p>
      Hey, here's a list of little web projects and stuff. Well, there is only
      one right now. But there will be more!
    </p>
    <ul
      css={css`
        list-style-type: none;
        margin: 0;
      `}
    >
      <li>
        <Project title="React Game of Life" url="http://life.eyehack.com/">
          <p>Conway's Game of Life, built with React.</p>
        </Project>
      </li>
      <li>
        <Project title="Any Wizard" url="https://twitter.com/anywizard">
          <p>Twitter bot that generates randomized images and text. Built in Python.</p>
        </Project>
      </li>
    </ul>
  </Layout>
)
