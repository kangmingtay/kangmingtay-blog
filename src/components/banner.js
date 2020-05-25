import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"

const Banner = (props) => {
    const styles = {
        div: {
            padding: `${rhythm(0)} ${rhythm(0)}`,
        },
        img: {
            borderRadius:`${rhythm(1)}`,
            opacity: props.opacity,
            margin: `${rhythm(1)} ${rhythm(1)}`,
        }
    }

    const data = useStaticQuery(graphql`
        query ImageQuery {
            file(relativePath: { eq: "algonquin.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }    
    `)

    return (
        <div style={styles.div}>
            <Img fluid={data.file.childImageSharp.fluid} style={styles.img}/>
        </div>
    )
}

export default Banner;
