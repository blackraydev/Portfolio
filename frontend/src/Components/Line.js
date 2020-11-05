import React, { Component } from "react";

export default class Line extends Component {
    constructor(props) {
        super(props);

        this.img = props.img;
        this.paragraph = props.paragraph;
        this.percentage = props.percentage;
    }

    render = () => (
        <div className="line">
            <div className="heading">
                <img alt="1" className="icon" src={ this.img }></img>
                <span> { this.paragraph } </span>
            </div>
            <div className="progress">
                <div className="bar" percentage={ this.percentage }></div>
                <div className="back_bar"></div>
                <span className="percentage" percentage={ this.percentage }> { this.percentage }% </span>
            </div>
        </div>
    );
}