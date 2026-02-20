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
                <p>I am a Full Stack Developer with a strong foundation in Java, JavaScript, and modern web technologies. I have built multiple real-world projects including a real-time multiplayer gaming app, chat applications, and full-stack platforms using React, Node.js, Express, and MongoDB.

                    I have also contributed to open-source projects like Checkstyle, where my pull requests were successfully merged. I enjoy solving problems, designing scalable systems, and continuously learning new tools and frameworks to improve my development skills.</p>

            </section>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </>
    )
}

export default About
