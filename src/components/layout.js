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
    }
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
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
