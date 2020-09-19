import React from "react";

function Project(props) {
    return (
        <div className="item" onClick={() => props.handleShow(props.image, props.desc)}>
            <button>
                <img src={props.image} alt={props.alt} />
                <div className="overlay">
                    <h5>{props.desc}</h5>
                </div>
            </button>
        </div>
    );
}

export default Project;