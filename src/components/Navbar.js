import React from "react";
import logo from "../assets/images/kalilogic.png";
import ScrollTo from "./ScrollTo";
import SetActiveItem from "./SetActiveItem";
import {FaAlignRight} from "react-icons/fa";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false,
            top: "0",
            position: "absolute",
            background: "transparent",
            section: {
                home: "active",
                about: "",
                services: "",
                projects: "",
                contact: ""
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
            this.setState({
                top: "0",
                position: "absolute",
                background: "transparent"
            });
        }
        if (document.body.scrollTop === 200 || document.documentElement.scrollTop === 200) {
            this.setState({
                top: "-50px"
            });
        }
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            this.setState({
                top: "0",
                position: "fixed",
                background: "#0a0a0a"
            });
        } 

        if (SetActiveItem("home", 80)) {
            this.setState({ 
                section: { home: "active" }
            })
        }
        if (SetActiveItem("about", 80)) {
            this.setState({
                section: { about: "active" }
            })
        }
        if (SetActiveItem("services", 80)) {
            this.setState({
                section: { services: "active" }
            })
        }
        if (SetActiveItem("projects", 80)) {
            this.setState({
                section: { projects: "active" }
            })
        }
        if (SetActiveItem("contact", 80)) {
            this.setState({
                section: { contact: "active" }
            })
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    handleClick = (event) => {
        let section = document.querySelector(event.target.name);
        ScrollTo(section, 1250, 80);
        this.handleToggle();
    };

    render() {
        let navstyle = {
            position: this.state.position,
            top: this.state.top,
            background: this.state.background
        };

        return (
            <div className="navbar" style={navstyle}>
                <div className="wrapper">
                    <header>
                        <button><img src={logo} className="logo" alt="logo" /></button>
                            
                        <button type="button" className="nav-btn">
                            <FaAlignRight className="nav-icon" onClick={this.handleToggle} />
                        </button>
                    </header>
                    <nav>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li className={this.state.section.home}><button name="#home" onClick={this.handleClick}>home</button></li>
                            <li className={this.state.section.about}><button name="#about" onClick={this.handleClick}>about</button></li>
                            <li className={this.state.section.services}><button name="#services" onClick={this.handleClick}>services</button></li>
                            <li className={this.state.section.projects}><button name="#projects" onClick={this.handleClick}>our work</button></li>
                            <li className={this.state.section.contact}><button name="#contact" onClick={this.handleClick}>contact</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Navbar;