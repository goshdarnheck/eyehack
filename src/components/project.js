import React from "react"
import { css } from "@emotion/core"
import { scale, rhythm } from "../utils/typography"

const Project = ({ title, url, children }) => {
  const fontScale = scale(0.2);

  return (
    <div>
      <p
        css={css`
          font-size: ${fontScale.fontSize};
          line-height: : ${fontScale.lineHeight};
          font-weight: bold;
          margin-bottom: ${rhythm(0.2)};
        `}
      >
        <a href={url}>{title}</a>
      </p>
      {children}
    </div>
  )
}

export default Project
