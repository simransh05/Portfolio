import React from 'react'
import './Project.css'
import { Divider } from '@mui/material'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiSocketdotio, SiMongodb, SiHandlebarsdotjs , SiMysql } from "react-icons/si";

function Projects() {
    return (
        <>
            <section id="projects">
                <h2>My Projects</h2>
                <Divider
                    style={{
                        backgroundColor: '#808080'
                    }}
                />
                <div className="project-container">
                    {/* Synqo app */}
                    <div className='individual-container'>
                        <img src="/Social-Media-App.png" alt="Synqo" className='images' />
                        <h2>Synqo</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p> <strong>Description: </strong>Built a scalable full-stack social media platform with real-time features including posts, likes, comments, messaging, and notifications.</p>
                        <div className="tech-stack">
                            <span><FaReact
                                style={{ color: "#61DBFB" }}
                            /> React</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiSocketdotio style={{ color: "#000000" }} /> Socket.io</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                            <span>SPA</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://synqo.netlify.app/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Synqo" target='_blank' className='link-info'>GitHub</a>
                        </div>
                    </div>
                    <div className='individual-container'>
                        <img src="/Gaming-App.png" alt="gaming app" className='images' />
                        <h2>Gaming Zone</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        {/* image of the app */}
                        {/* description */}
                        <p> <strong>Description: </strong> Real-time multiplayer game with private rooms using WebSockets. Includes room restriction logic and instant state synchronization.</p>
                        <div className="tech-stack">
                            <span><FaReact
                                style={{ color: "#61DBFB" }}
                            /> React</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiSocketdotio style={{ color: "#000000" }} /> Socket.io</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                            <span>SPA</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://xoxo-battle-game.netlify.app/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Gaming-App" target='_blank' className='link-info'>GitHub</a>
                        </div>

                    </div>
                    <div className='individual-container'>
                        <img src="/Chat-App.png" alt="Chat App" className='images' />
                        <h2>Chat App</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p><strong>Description: </strong>Real-time chat application using React and Socket.IO for instant bidirectional communication without page reloads.</p>
                        <div className="tech-stack">
                            <span><FaReact
                                style={{ color: "#61DBFB" }}
                            /> React</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiSocketdotio style={{ color: "#000000" }} /> Socket.io</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                            <span>SPA</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://pingup-chat.netlify.app/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Chat-App" target='_blank' className='link-info'>GitHub</a>
                        </div>
                    </div>
                    <div className='individual-container'>
                        <img src="/Nutrition-App.png" alt="Nutrition-App" className='images' />
                        <h2>Nutrition App</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p><strong>Description: </strong>Built a full-stack nutrition tracking application with food search, intake monitoring, and nutrient-based filtering using a multi-page architecture.</p>
                        <div className="tech-stack">
                            <span><SiHandlebarsdotjs
                                style={{ color: "#f33001" }}
                            /> Handlebars</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                            <span>MPA</span>
                        </div>
                        <div className="ind-project">
                            <a target='_blank' className='link-info disabled'>Live Soon</a>
                            <a href="https://github.com/simransh05/Nutrition-App" target='_blank' className='link-info'>GitHub</a>
                        </div>
                    </div>
                    <div className='individual-container'>
                        <img src="/Job-Tracker-App.png" alt="job tacker app" className='images' />
                        <h2>Job Tracker App</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p><strong>Description: </strong>Developed a web application to manage job applications with authentication, CRUD operations, and a basic dashboard using a multi-page structure.</p>
                        <div className="tech-stack">
                            <span><SiHandlebarsdotjs
                                style={{ color: "#f33001" }}
                            /> Handlebars</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiMysql style={{ color: "#00758F" }} /> MySQL</span>
                            <span>MPA</span>
                        </div>
                        <div className="ind-project">
                            <a target='_blank' className='link-info disabled' >Live Soon</a>
                            <a href="https://github.com/simransh05/Job-Tracker-App" target='_blank' className='link-info'>GitHub</a>
                        </div>
                    </div>
                </div>

            </section>
            <Divider
                sx={{
                    backgroundColor: "#808080"
                }} />
        </>
    )
}

export default Projects
