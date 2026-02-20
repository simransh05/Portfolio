import React from 'react'
import './Navbar.css'
import { Divider } from '@mui/material';
function Navbar() {

    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id='navbar'>
            <div className="navbar">
                <a onClick={() => handleClick('about')}>About</a>
                <a onClick={() => handleClick('skills')}>Skills</a>
                <a onClick={() => handleClick('projects')}>Projects</a>
                <a onClick={() => handleClick('contact')}>Contact</a>
            </div>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </section>
    )
}

export default Navbar;