import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from "../utils/typography"

const menu = () => {
    return (
        <div
            style={{
                padding: `${rhythm(1)} ${rhythm(0.75)}`,
            }}
        >
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-evenly',
            }}>
                {/* <li><Link style={{color: `inherit`}} to="/">Home</Link></li> */}
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
            
        </div>
    )
}

export default menu;