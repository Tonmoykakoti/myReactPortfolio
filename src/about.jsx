import React from 'react';

const About = () => {
    return (
       <section className="about-page" id="about">
        <article className="about-section">
            <h1>about <span>me</span></h1>
            <p>Hey there i'm a self taught web developer,highly motivated seeking to launch
                a career in building web applications. With each project,i push my work to a new horizons.
            </p>
            <p>i'm well equipped to develop diverse consumer specific content.<br/>i mainly specialize in these key
                skills
            </p>
            <div className="icons">
                <i className="fa-brands fa-html5"></i>
                <i className="fa-brands fa-css3"></i>
                <i className="fa-brands fa-square-js"></i>
                <i className="fa-brands fa-react"></i>
            </div>
        </article>
    </section>
    );
}

export default About;
