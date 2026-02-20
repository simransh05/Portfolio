import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { Divider } from '@mui/material'
import './Contact.css'
function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
            <div className="contact-container">
                <div>

                    <a href="mailto:ss1043422@gmail.com" target='_blank'>
                        <MdEmail
                            style={{
                                width: '40px',
                                height: '40px',
                                marginTop: '20px'
                            }} />
                    </a>

                </div>
                <div >
                    <a href="https://www.linkedin.com/in/simran-sharma-0bb94a343" target='_blank'>
                        <FaLinkedin
                            style={{
                                color: '#0A66C2',
                                width: '40px',
                                height: '40px',
                                marginTop: '20px'
                            }} />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/simransh05" target='_blank'>
                        <FaGithub
                            style={{
                                width: '40px',
                                height: '40px',
                                marginTop: '20px'
                            }} />
                    </a>
                </div>
            </div>


        </section>
    )
}

export default Contact
