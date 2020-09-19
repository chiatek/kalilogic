import React from "react";
import ScrollTo from "./ScrollTo";
import poster from "../assets/images/poster.jpg";
import video from "../assets/video/video_background.mp4";

class Hero extends React.Component {
    
    handleClick = () => {
        let section = document.getElementById("about");
        ScrollTo(section, 1250, 80);
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="hero-content">
                        <h1>Cutting edge app design awaits.</h1>
                        <h1>Proceed with caution...</h1>
    
                        <button className="btn-primary" onClick={this.handleClick}>Continue</button>
                    </div>
                </div>
    
                <video id="video" poster={poster} autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default Hero;