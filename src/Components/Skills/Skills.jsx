import { Divider } from '@mui/material'
import React from 'react'
import './skills.css'
import {
    FaReact,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGitAlt,
    FaGithub,
    FaJava
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiMysql,
    SiPostman
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
    const skills = {
        Frontend: [
            { name: "React", icon: <FaReact style={{ color: "#61DBFB" }} /> },
            { name: "JavaScript", icon: <FaJs style={{ color: "#F7DF1E" }} /> },
            { name: "HTML", icon: <FaHtml5 style={{ color: "#E34F26" }} /> },
            { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> }
        ],

        Backend: [
            { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
            { name: "Express.js", icon: <SiExpress style={{ color: "#FFFFFF" }} /> },
            { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
            { name: "MySQL", icon: <SiMysql style={{ color: "#4479A1" }} /> }
        ],

        Programming: [
            { name: "Java (DSA)", icon: <FaJava style={{ color: "#007396" }} /> }
        ],

        Tools: [
            { name: "Git", icon: <FaGitAlt style={{ color: "#F05032" }} /> },
            { name: "GitHub", icon: <FaGithub style={{ color: "#FFFFFF" }} /> },
            { name: "VS Code", icon: <VscVscode style={{ color: "#007ACC" }} /> },
            { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> }
        ]
    };
    return (
        <>
            <section id="skills">
                <h2>My Skills</h2>
                <Divider
                    sx={{
                        backgroundColor: "#808080"
                    }} />
                {/* chart */}
                <div className="skills-section">
                    {Object.entries(skills).map(([category, items]) => (
                        <div key={category} className="skill-category">
                            <h3>{category}</h3>

                            <div className="skill-grid">
                                {items.map((skill, index) => (
                                    <div key={index} className="skill-card">
                                        <span className="icon">{skill.icon}</span>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </>
    )
}

export default Skills
