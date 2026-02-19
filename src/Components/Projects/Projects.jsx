import React from 'react'
import './project.css'
function Projects() {
    return (
        <section id="projects">
            <h3>My Projects</h3>
            <div className="project-container">
                {/* connectX app */}
                {/* <div className='ind-container'>
                    <h3>ConnectX</h3>
                    <a href="https://github.com/simransh05/ConnectX-App" target='_blank'>GitHub</a>
                    <a href="" target='_blank'>Application</a>
                </div> */}
                <div className='ind-container'>
                    <h3>Gaming Zone</h3>
                    {/* image of the app */}
                    {/* description */}
                    <div className="ind-project">
                        <a href="https://github.com/simransh05/Gaming-App" target='_blank'>GitHub</a>
                        <a href="https://xoxo-battle-game.netlify.app/" target='_blank'>Application</a>
                    </div>

                </div>
                <div className='ind-container'>
                    <h3>Udemy App</h3>
                    <div className="ind-project">
                        <a href="https://github.com/simransh05/Udemy-App" target='_blank'>GitHub</a>
                        <a href="https://skillico.netlify.app/" target='_blank'>Application</a>
                    </div>
                </div>
                <div className='ind-container'>
                    <h3>Chat App</h3>
                    <div className="ind-project">
                        <a href="https://github.com/simransh05/Chat-App" target='_blank'>GitHub</a>
                        <a href="https://pingup-chat.netlify.app/" target='_blank'>Application</a>
                    </div>
                </div>
                <div className='ind-container'>
                    <h3>Resume App</h3>
                    <div className="ind-project">
                        <a href="https://github.com/simransh05/Resume-App" target='_blank'>GitHub</a>
                        <a href="https://resume-app-frontend.netlify.app/" target='_blank'>Application</a>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Projects
