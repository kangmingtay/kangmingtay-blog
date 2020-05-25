import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {

  const styles = {
    h3: {
      fontFamily: `Inconsolata`,
      marginTop: 0,
    },
    div: {
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(30),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    },
    ul: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    link: {
      boxShadow: `none`, 
      color: `inherit`
    },
    alinkedin: {
      background:`url(https://linkedin.com/favicon.ico) no-repeat left center`,
      paddingLeft:`19px`,
      color: `inherit`
    },
  }

  const header =  (
    <h3 style={styles.h3}>
      <ul style={styles.ul}>
          <li><Link style={styles.link} to={`/`}>{title}</Link></li>
          <li><Link style={styles.link} to="/about">About</Link></li>
          <li><Link style={styles.link} to="/blog">Blog</Link></li>
      </ul>
    </h3>
  )

  return (
    <div style={styles.div}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <ul style={styles.ul}>
          <li>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a style={{...styles.link, color: "#FF8D33"}} href="https://www.gatsbyjs.org">Gatsby</a>
          </li>
          <li><a style={styles.alinkedin} href="https://www.linkedin.com/in/kangmingtay/">Linkedin</a></li>
          <li><a style={styles.link} href="https://github.com/kangmingtay">Github</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
