import React, { Component } from "react";
import AnimBars from "../../scripts/AnimBars";
import { CSSTransition } from "react-transition-group";
import ToggleComponent from "../../scripts/ToggleComponent";
import Section from "../Section";

import vkLogo from "../../img/vk.svg";
import instLogo from "../../img/instagram.svg";
import gitLogo from "../../img/github.svg";

import htmlIcon from "../../img/htmlIcon.svg";
import cssIcon from "../../img/cssIcon.png";
import jsIcon from "../../img/jsIcon.png";
import reactIcon from "../../img/reactIcon.png";
import nodeIcon from "../../img/nodeIcon.svg";
import csharpIcon from "../../img/csharpIcon.svg";
import coreIcon from "../../img/coreIcon.png";
import postgreIcon from "../../img/postgreIcon.png";

export default class About extends Component {
    componentDidMount() {
        ToggleComponent();
        AnimBars();
    }

    render() {
        const frontParagraphs = {
            first: "HTML",
            second: "CSS",
            third: "JS",
            fourth: "React"
        }
    
        const frontImgs = {
            first: htmlIcon,
            second: cssIcon,
            third: jsIcon,
            fourth: reactIcon
        }
    
        const frontPercentage = {
            first: 100,
            second: 100,
            third: 100,
            fourth: 75
        }
    
        const backParagraphs = {
            first: "Node",
            second: "C#",
            third: ".NET",
            fourth: "Postgre"
        }
    
        const backImgs = {
            first: nodeIcon,
            second: csharpIcon,
            third: coreIcon,
            fourth: postgreIcon
        }
    
        const backPercentage = {
            first: 50,
            second: 100,
            third: 25,
            fourth: 65
        }

        return(
            <div className="about">
                <CSSTransition appear in timeout={750} classNames="anim-description">
                    <div className="description">
                        <div className="text">
                            <h1> I am a Web Developer </h1>
                            <p> Hi, I'm Ramil. Nice to meet you. </p>
                            <p> I'm quietly confident, naturally curious, and perpetually working on improving my skills. </p>
                            <p> Mostly, I do Web Development and also like working in Data Science. I enjoy challenging tasks and look forward to interesting and innovative projects. <br/>  <br/></p>
                            <p> Let's be friends? </p>
                        </div>
                        <div className="links">
                            <img className="social_logo" src={vkLogo}></img>
                            <img className="social_logo" src={instLogo}></img>
                            <img className="social_logo" src={gitLogo}></img>
                        </div>
                    </div>
                </CSSTransition>
                <div className="web_sections">
                    <Section skills="Frontend skills" anim="anim-firstCard" paragraphs={ frontParagraphs }
                             percentage={ frontPercentage } imgs={ frontImgs } />

                    <Section skills="Backend skills" anim="anim-secondCard" paragraphs={ backParagraphs }
                             percentage={ backPercentage  } imgs={ backImgs } />
                </div>
            </div>
        )
    }
}