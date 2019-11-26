import React from "react"
import { Global as GlobalEmotion, css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import Footer from "../components/footer"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <GlobalEmotion
          styles={css`
            html {
              box-sizing: border-box;
            }

            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }

            :root {
              --background: #fff;
              --primary: #222;
              --secondary: #090;
              --tertiary: #009;
            }
          `}
        />
        <div
          css={css`
            margin-left: auto;
            margin-right: auto;
            max-width: ${rhythm(24)};
            padding: ${rhythm(1)} ${rhythm(3 / 4)};
          `}
        >
          <header
            css={css`
              border-bottom: 3px double var(--primary);
            `}
          >
            <h1
              css={css`
                &:before {
                  content: "// ";
                }
              `}
            >
              eyehack
            </h1>
          </header>
          <main
            css={css`
              padding: ${rhythm(1)} 0;
            `}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
