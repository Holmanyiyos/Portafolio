import React from "react";
import Navbar from "../components/Navbar";
import './styles/homepage.css'

class homepage extends React.Component{
render(){
    return(
        <>
        <Navbar/>
        <div className="main">
        <div className="left">
            <h1>Holman <br/> Plazas<span>.</span></h1>
            <p>__________</p>
            <p>GitHub: </p>
            <p>Twitter: </p>
            <p>Linkedin: </p>
            <button type="button">Contact Me</button>
        </div>
        <div className="center">
            <img src="https://www.lapi.com.mx/image.ashx?s=57067&im=115316&t=p" alt="" />
        </div>
        <div className="right">
            <h3>Introduction</h3>
            <h2>Frontend Developer Junior</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, voluptatum esse optio atque repellat earum nisi, aperiam facere quo pariatur quisquam corrupti, blanditiis rem labore magni at? Eius, voluptatibus! Illo!
            </p>
        </div>
        </div>

        <div className="knowledge">
            <h3>Knowledge</h3>
            <h2>I feel comfortable using: </h2>
            <p>In my personal projects I have used a lot of resources, in order to familiarize myself with them.</p>
            <div className="icons">
                <div className="card">Html5</div>
                <div className="card">Css3</div>
                <div className="card">Sass</div>
                <div className="card">Javascript</div>
                <div className="card">ReactJs</div>
                <div className="card">Git-GitHub</div>
                <div className="card">MongoDB</div>
                <div className="card">Firebase</div>
            </div>
        </div>
        </>
    )
}
}

export default homepage;