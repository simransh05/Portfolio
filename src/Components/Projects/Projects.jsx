import React from 'react'
import './Project.css'
import { Divider } from '@mui/material'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiAxios, SiSocketdotio, SiMongodb } from "react-icons/si";
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
                    {/* connectX app */}
                    <div className='individual-container'>
                        <img src="/Social-Media-App.png" alt="ConnectX" className='images' />
                        <h2>ConnectX</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p> <strong>Description: </strong>Full-stack social media platform with real-time interactions, including post creation, likes, comments, messaging, and notifications using MERN stack and WebSockets.</p>
                        <div className="tech-stack">
                            <span><FaReact
                                style={{ color: "#61DBFB" }}
                            /> React</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiAxios style={{ color: "#8a2be2" }} /> Axios</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                        </div>
                        <div className="ind-project">
                            <a href="" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/ConnectX-App" target='_blank' className='link-info'>GitHub</a>
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
                            <span><SiAxios style={{ color: "#8a2be2" }} /> Axios</span>
                            <span><SiSocketdotio style={{ color: "#000000" }} /> Socket.io</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://xoxo-battle-game.netlify.app/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Gaming-App" target='_blank' className='link-info'>GitHub</a>
                        </div>

                    </div>
                    <div className='individual-container'>
                        <img src="/Udemy-App.png" alt="Udemy-App" className='images' />
                        <h2>Udemy App</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p><strong>Description: </strong>Full-stack Udemy clone that allows users to browse courses, view details, and simulate course purchases. Built with React, Node.js, Express, and REST APIs.</p>
                        <div className="tech-stack">
                            <span><FaReact
                                style={{ color: "#61DBFB" }}
                            /> React</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiAxios style={{ color: "#8a2be2" }} /> Axios</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://skillico.netlify.app/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Udemy-App" target='_blank' className='link-info'>GitHub</a>
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
                            <span><SiAxios style={{ color: "#8a2be2" }} /> Axios</span>
                            <span><SiSocketdotio style={{ color: "#000000" }} /> Socket.io</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://pingup-chat.netlify.app/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Chat-App" target='_blank' className='link-info'>GitHub</a>
                        </div>
                    </div>
                    <div className='individual-container'>
                        <img src="/Resume-App.png" alt="gaming app" className='images' />
                        <h2>Resume App</h2>
                        <Divider
                            style={{
                                backgroundColor: '#808080'
                            }}
                        />
                        <p><strong>Description: </strong>Resume builder app that allows users to create and preview professional resumes dynamically using React form handling and state management.</p>
                        <div className="tech-stack">
                            <span><FaReact
                                style={{ color: "#61DBFB" }}
                            /> React</span>
                            <span><FaNodeJs style={{ color: "#339933" }} /> Node</span>
                            <span><SiExpress style={{ color: "#FFFFFF" }} /> Express</span>
                            <span><SiAxios style={{ color: "#8a2be2" }} /> Axios</span>
                            <span><SiMongodb style={{ color: "#47A248" }} /> MongoDB</span>
                        </div>
                        <div className="ind-project">
                            <a href="https://nutrition-app-fbbf.onrender.com/" target='_blank' className='link-info'>View Live</a>
                            <a href="https://github.com/simransh05/Nutrition-App" target='_blank' className='link-info'>GitHub</a>
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
