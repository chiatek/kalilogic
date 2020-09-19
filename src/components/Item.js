import React from "react";

function Item(props) {
    return (
        <div className="item">
            <div className="about-title">
                <span className="square"></span>
                <h3>{props.headline}</h3>
            </div>
            <p>
                {props.paragraph}
            </p>
        </div>
    );
}

export default Item;