import React from 'react'
import { rhythm } from "../utils/typography"
import CoverPic from "../../content/assets/algonquin.jpg"

const banner = (props) => {
    return (
        <div
            style={{
                padding: `${rhythm(0)} ${rhythm(0)}`,
            }}
        >
            <img 
                src={CoverPic} 
                alt="banner" 
                style={{
                    borderRadius:`${rhythm(1)}`,
                    opacity: props.opacity
                }}
            />
            
        </div>
    )
}

export default banner;