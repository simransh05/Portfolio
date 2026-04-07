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
                <p>Full Stack Developer with a strong foundation in Java and modern web technologies, focused on building scalable web applications and real-time systems using the MERN stack and WebSockets.

                    Built multiple full-stack projects including a real-time multiplayer game, chat application, and course platform. Contributed to open-source projects like Checkstyle with successfully merged pull requests.

                    Passionate about problem-solving, system design, and continuously improving development skills through hands-on projects.</p>

            </section>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </>
    )
}

export default About
