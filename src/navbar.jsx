import React from 'react';
import { useState,useRef } from 'react';
import logo from './assets/images/TONMOY.svg'
import image from './assets/images/image-0.png'
import { links } from './data';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    const navLinksRef = useRef(null)
    const linksRef = useRef(null)
    
    const toggle = () => {
       setShowLinks(!showLinks)
    }

    const linkStyles = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px`: '0px'
    }
    return (
         <header id="home">
        <nav className="navbar">
            <div className="nav-center">
                     <div className="nav-header">
                     <a href="#home" className="nav-logo">
                             <img src={ logo} alt="tonmoy" />
                     </a>
                        <button type="button" className="btn nav-btn" onClick={toggle}><i className="fa-solid fa-bars"></i></button>
                    </div>
                    <div className='nav-links' ref={navLinksRef} style={linkStyles}>
                        <ul className="links" ref={linksRef}>
                            { links.map((link) => {
                                const { id, href, text } = link
                                return (
                                     <li key={id}>
                                        <a href={ href } className="nav-link">{ text}</a>
                                     </li>
                                )
                            })}
                        </ul>
                    </div>
            </div>
        </nav>

        <main className="page">
            <article className="content">
                <h1>Hello!!</h1>
                <p>I'm <span className="name">Tonmoy</span>,a <span className="hash">#</span><u>Front-End</u> developer <br/>
                    from India(Assam)
                </p>
                <a href="#footer" className="link-btn">hire me</a>
            </article>
            <article className="image-container">
            <img src={ image} alt="user" className="img user-img" />
            </article>
        </main>
    </header>
    );
}

export default Navbar;
