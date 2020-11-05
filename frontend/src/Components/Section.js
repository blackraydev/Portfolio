import React from "react";
import { CSSTransition } from "react-transition-group";
import Line from "./Line";

export default function(props) {
    return(
        <CSSTransition appear in timeout={750} classNames={ props.anim }>
            <div className="section">
                <div className="header">
                    <h2> { props.skills } </h2>
                </div>
                <div className="paragraphs">

                    <Line img={ props.imgs.first  }  paragraph={ props.paragraphs.first }
                          percentage={ props.percentage.first }/>

                    <Line img={ props.imgs.second }  paragraph={ props.paragraphs.second } 
                          percentage={ props.percentage.second }/>

                    <Line img={ props.imgs.third  }  paragraph={ props.paragraphs.third }
                          percentage={ props.percentage.third }/>

                    <Line img={ props.imgs.fourth }  paragraph={ props.paragraphs.fourth } 
                          percentage={ props.percentage.fourth }/>
                          
                </div>
            </div>
        </CSSTransition>
    );
}