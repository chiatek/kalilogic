import React from "react";
import Lorem from "../components/Lorem";
import Title from "../components/Title";
import Form from "../components/Form";

function Contact() {
    return (
        <div className="dark-wrapper">
            <div className="wrapper">
                <section id="contact">
                    <Title title="contact us" summary={Lorem(29)} />
                    <Form />
                </section>
            </div>
        </div>
    );
}

export default Contact;