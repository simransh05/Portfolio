import { Divider } from '@mui/material'
import React from 'react'

function About() {
    return (
        <>
            <section id="about">
                <h2>About Me</h2>
                <Divider
                    sx={{
                        backgroundColor: "#808080"
                    }} />
                <p>Full Stack Developer with a strong foundation in Java, Data Structures, and modern web technologies. Skilled in building full-stack applications using the MERN stack and WebSockets, including real-time systems like chat and multiplayer applications. Developed multiple projects focusing on backend logic, APIs, and user interaction, and contributed to open-source projects like Checkstyle with successfully merged pull requests. Continuously improving problem-solving and system design skills through hands-on development and practical implementation.</p>

            </section>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </>
    )
}

export default About
