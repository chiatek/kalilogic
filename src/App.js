import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "./assets/css/main.css";

function App() {
    return (
        <div>
            <Header />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;