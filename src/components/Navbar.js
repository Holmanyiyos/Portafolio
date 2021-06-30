import React from 'react';
import './styles/Navbar.css'

function Navbar(){
    return(
        <div className="container">
            <h2>HP.</h2>
            <ul className="nav">
                <a href="/"><li>Home</li></a>
                <a href="/"><li>Portfolio</li></a>
                <a href="/"><li>Pages</li></a>
                <a href="/"><li>icons Socials</li></a>
            </ul>
        </div>
    )
}

export default Navbar;