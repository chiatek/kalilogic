import React from "react";

function Title(props) {
    return (
        <div>
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <p className="section-summary">
                {props.summary}
            </p>
        </div>
    );
}

export default Title;