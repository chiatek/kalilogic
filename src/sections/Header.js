import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

function Header() {
    return (
        <div className="hero-wrapper" id="home">
            <Navbar />
            <Hero />
        </div>
    );
}

export default Header;