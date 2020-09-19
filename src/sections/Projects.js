import React from "react";
import Lorem from "../components/Lorem";
import Title from "../components/Title";
import Project from "../components/Project";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";
import project5 from "../assets/images/project5.jpg";
import project6 from "../assets/images/project6.jpg";
import project7 from "../assets/images/project7.jpg";
import project8 from "../assets/images/project8.jpg";

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {
            display: "none",
            image: "",
            desc: "",
            alt: ""
        }
    }

    handleShow = (image, desc) => {
        this.setState({
            display: "block",
            image: image,
            desc: desc
        });
    }

    handleClose = () => {
        this.setState({
            display: "none"
        });
    }

    render() {
        return (
            <div className="wrapper">
                <section id="projects">
                    <Title title="latest projects" summary={Lorem(23)} />
                    <div className="projects">
                        <Project image={project1} desc="project 1 description" alt="project 1" handleShow={this.handleShow} />
                        <Project image={project2} desc="project 2 description" alt="project 2" handleShow={this.handleShow} />
                        <Project image={project3} desc="project 3 description" alt="project 3" handleShow={this.handleShow} />
                        <Project image={project4} desc="project 4 description" alt="project 4" handleShow={this.handleShow} />
                        <Project image={project5} desc="project 5 description" alt="project 5" handleShow={this.handleShow} />
                        <Project image={project6} desc="project 6 description" alt="project 6" handleShow={this.handleShow} />
                        <Project image={project7} desc="project 7 description" alt="project 7" handleShow={this.handleShow} />
                        <Project image={project8} desc="project 8 description" alt="project 8" handleShow={this.handleShow} />
                    </div>
    
                    <div id="projects-modal" className="modal" style={{display: this.state.display}}>
                        <span className="close" onClick={this.handleClose}>&times;</span>
                        <img src={this.state.image} className="modal-content" id="image" alt={this.state.alt} />
                        <div id="caption">{this.state.desc}</div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;