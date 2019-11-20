import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  bodyFontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
  ],
  headerColor: "var(--secondary)",
  bodyColor: "var(--primary)",
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      a: {
        color: `var(--tertiary)`,
        textDecoration: `none`,
      },
      "a:visited": {
        color: `var(--tertiary)`,
      },
      "a:active": {
        color: `var(--primary)`,
      },
      "a:hover": {
        color: `var(--secondary)`,
      },
    }
  },
})

export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
