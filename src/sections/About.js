import React from "react";
import Lorem from "../components/Lorem";
import Title from "../components/Title";
import Item from "../components/Item";

function About() {
    return (
        <div className="wrapper">
            <section id="about">
                <Title title="about us" summary={Lorem(36)} />
                <div className="about">
                    <Item headline="what we do" paragraph={Lorem(36)} />
                    <Item headline="what we offer" paragraph={Lorem(36)} />
                    <Item headline="how we differ" paragraph={Lorem(36)} />
                    <Item headline="what we guarantee" paragraph={Lorem(36)} />
                </div>
            </section>
        </div>
    );
}

export default About;