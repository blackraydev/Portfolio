import React from "react";

export default function(props) {
    return(
        <div className="site">
            <div className="shadow">
                <h3> {props.text} </h3>
                <button> Visit Website </button>
            </div>
            <img alt="1" src={ props.img }></img>
        </div>
    );
}