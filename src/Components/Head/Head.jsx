import { Divider } from '@mui/material'
import React from 'react'

function Head() {
    return (
        <section id="hero">
            <h1>Hi, I'm Simran Sharma</h1>
            <h3>Full Stack Developer</h3>
            <p>bio</p>
            <div>
                <a href="#projects">
                    View Projects
                </a>

                <a href="#contact">
                    Contact Me
                </a>
            </div>
            <Divider
            sx={{
                border:"#ffffff",
                padding:'10px'
            }} />
        </section>
    )
}

export default Head
