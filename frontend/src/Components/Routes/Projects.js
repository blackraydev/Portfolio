import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import ToggleComponent from "../../scripts/ToggleComponent";
import Site from "../Site";

import awg2020 from "../../img/awg2020.png";
import chronicled from "../../img/chronicled.png";
import coupal from "../../img/coupal.png";
import wedler from "../../img/wedler.png";
import wfdesign from "../../img/wfdesign.png";
import glcsolutions from "../../img/glcsolutions.png";

export default class Projects extends Component{
    componentDidMount() {
        ToggleComponent();
    }

    render() {
        return(
            <div className="projects">
                <CSSTransition in appear timeout={1250} classNames="anim_projects_heading">
                    <div className="heading">
                        <h1>My recent works</h1>
                    </div>
                </CSSTransition>
                
                <div className="container">
                    <CSSTransition in appear timeout={1550} classNames="anim_projects_firstProject">
                        <Site img={ awg2020 }
                              text="Uniting First Nations culture and community through winter sports competition."/>
                    </CSSTransition>

                    <CSSTransition in appear timeout={1550} classNames="anim_projects_secondProject">
                        <Site img={ chronicled }
                              text="Blockchain pioneers bringing transparency, trust, and security to supply."/>
                    </CSSTransition>

                    <CSSTransition in appear timeout={1550} classNames="anim_projects_thirdProject">
                        <Site img={ coupal }
                              text="Vancouver's tower crane rental service and support leader since 1974."/>
                    </CSSTransition>

                    <CSSTransition in appear timeout={1550} classNames="anim_projects_fourthProject">
                        <Site img={ wedler }
                              text="Results-oriented, responsive and flexible full service civil engineering firm."/>
                    </CSSTransition>

                    <CSSTransition in appear timeout={1550} classNames="anim_projects_fifthProject">
                        <Site img={ wfdesign }
                              text="High-end, custom residential renovaters serving Fraser Valley homeowners."/>
                    </CSSTransition>

                    <CSSTransition in appear timeout={1550} classNames="anim_projects_sixthProject">
                        <Site img={ glcsolutions }
                              text="Business savvy tech experts helping forward thinking companies get things done."/>
                    </CSSTransition>
                </div>
            </div>
        )
    }
}