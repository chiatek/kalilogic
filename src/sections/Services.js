import React from "react";
import Lorem from "../components/Lorem";
import Title from "../components/Title";
import Feature from "../components/Feature";

function Services() {
    return (
        <div className="bg-wrapper">
            <div className="wrapper">
                <section id="services">
                    <Title title="our services" summary={Lorem(36)} />
                    <div className="services">
                        <Feature headline="mobile design" paragraph={Lorem(29)} name="item-1" />
                        <Feature headline="iOS / android" paragraph={Lorem(29)} name="item-2" />
                        <Feature headline="logo design" paragraph={Lorem(29)} name="item-3" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Services;