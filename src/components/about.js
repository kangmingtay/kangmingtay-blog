import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Author = () => {
  const data = useStaticQuery(graphql`
    query AboutMeQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
      file(relativePath: { eq: "aboutme.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
      }
    }
  `)
  const styles = {
      mainDiv: {
        display: `flex`,
        marginBottom: rhythm(2.5),
        justifyContent: "space-evenly",
        flexDirection: "column"
      },
      flexDiv: {
        width: "100%"
      },
      img: {
        borderRadius:`${rhythm(1)}`,
        margin: `${rhythm(1)} ${rhythm(1)}`,
      },
      p: {
          textAlign: "justify" 
      }
  }
//   const { author, social } = data.site.siteMetadata
  return (
    <div
      style={styles.mainDiv}
    >
      <div style={styles.flexDiv}>
        <Image fluid={data.file.childImageSharp.fluid} style={styles.img}/>
      </div>
      <div style={styles.flexDiv}>
        <p style={styles.p}>
            Nice to meet you! I'm Kang Ming. I'm currently studying for my Bachelor's degree for Computer Engineering at the National University of Singapore. I love to <strong>build challenging software applications</strong> and I'm always hungry to <strong>learn new things</strong>! 
        </p>
        <p style={styles.p}>
            In my free time, I enjoy being close to nature and escaping from the city life. This is a picture of me sitting by the lakeside in Algonquin National Park in Ontario during Fall!  
        </p>
      </div>
      
    </div>
  )
}

export default Author
