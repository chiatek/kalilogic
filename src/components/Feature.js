import React from "react";
import {FaMobileAlt} from "react-icons/fa";
import {FaApple} from "react-icons/fa";
import {FaPencilRuler} from "react-icons/fa";

function Feature(props) {
    let icon = <FaMobileAlt className="fa-icon" />;

    if (props.name === "item-2") {
        icon = <FaApple className="fa-icon" />;
    }
    
    if (props.name === "item-3") {
        icon = <FaPencilRuler className="fa-icon" />
    }

    return (
        <div className={props.name}>
            <div className="icon">{icon}</div>
            <h4>{props.headline}</h4>
            <p>
                {props.paragraph}
            </p>
        </div>
    );
}

export default Feature;