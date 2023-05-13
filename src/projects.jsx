import React from 'react';
import { data } from './data';

const Projects = () => {
    return (
       <section className="projects" id="projects">
        <h1>project<span>s</span></h1>
        <div className="projects-container">
                <ul className="projects-link">
                    { data.map((item) => {
                        const { id, url, img, info } = item
                        return (
                                <li key={id}>
                                <a href={ url} className="projects-images">
                                    <img src={ img} alt="backroad" className="img photos "/>
                                    <p>{ info}</p>
                                    </a>
                                </li>
                        )
                    })}
               
            </ul>
        </div>
    </section>
    )
}

export default Projects;
