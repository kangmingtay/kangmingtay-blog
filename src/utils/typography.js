import Typography from "typography"
import GithubTheme from "typography-theme-github"

GithubTheme.overrideThemeStyles = () => {
  return {
    "a": {
      // color: `black`,
    },
    "a:link": {
      textDecoration: `none`,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete GithubTheme.googleFonts

const typography = new Typography(GithubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
