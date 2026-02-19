import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import './Contact.css'
function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-container">
                <div>
                    <MdEmail />
                    <a href="mailto:ss1043422@gmail.com" target='_blank'>Email</a>
                </div>
                <div>
                    <FaLinkedin
                        style={{
                            color: '#0A66C2',
                        }} />
                    <a href="https://www.linkedin.com/in/simran-sharma-0bb94a343" target='_blank'>Linkedln</a>
                </div>
                <div>
                    <FaGithub />
                    <a href="https://github.com/simransh05" target='_blank'>GitHub</a>
                </div>
            </div>


        </section>
    )
}

export default Contact
