import React from "react"
import { css } from "@emotion/core"
import { scale, rhythm } from "../utils/typography"

const Footer = () => {
  const fontScale = scale(-0.3)

  return (
    <footer
      css={css`
        border-top: 3px double var(--primary);
        font-size: ${fontScale.fontSize};
        line-height: ${fontScale.lineHeight};
        padding-top: ${rhythm(1 / 2)};
      `}
    >
      <p>
        © {new Date().getFullYear()} Matthew Rapati, for more check out the{" "}
        <a href="https://hamburgersandwich.com">Hamburger Sandwich Blog</a>
      </p>
    </footer>
  )
}

export default Footer
