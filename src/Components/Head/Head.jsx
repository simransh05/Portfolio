import { Divider } from '@mui/material'
import React from 'react'
import './Head.css'

function Head() {
    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section id="head">
                <h1>Hi, I'm Simran Sharma</h1>
                <h2 className='profile'>Full Stack Developer</h2>
                <p>Full Stack Developer building scalable web applications and real-time systems using the MERN stack. Experienced in developing end-to-end projects and contributing to open-source.</p>
                <div className='btns'>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        View Resume
                    </a>
                    <a onClick={() => handleClick('projects')} className='view-project'>
                        View Projects
                    </a>

                    <a onClick={() => handleClick('contact')}>
                        Contact Me
                    </a>
                </div>

            </section>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </>
    )
}

export default Head
