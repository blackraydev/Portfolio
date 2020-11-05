import React, { Component } from "react";
import ToggleComponent from "../../scripts/ToggleComponent";
import { CSSTransition } from "react-transition-group";
import AddAnimButton from "../../scripts/AddAnimButton";
import Validate from "../../scripts/Validate";

export default class Contacts extends Component {
    componentDidMount = () => {
        ToggleComponent();
        Validate();
    }

    render = () => {
        return(
            <div className="contacts">
                <form onSubmit={Validate} action="http://localhost:8080/send_mail" method="post" className="reach_out">
                    <CSSTransition in appear timeout={750} classNames="anim_reach_out_heading">
                        <h1>Thanks for taking the time to reach out. How can I help you today?</h1>
                    </CSSTransition>

                    <div className="inputs">
                        <CSSTransition appear in timeout={1000} classNames="anim_reach_out_input_1">
                            <div className="first_input">
                                <input className="fio" type="text" name="fio" placeholder="Name"></input>
                            </div>
                        </CSSTransition>

                        <CSSTransition appear in timeout={1000} classNames="anim_reach_out_input_2">
                            <div className="second_input">
                                <input className="email" type="text" name="email" placeholder="Email"></input>
                            </div>
                        </CSSTransition>
                    </div>
                
                    <CSSTransition appear in timeout={1000} classNames="anim_reach_out_textarea">
                        <div className="textarea">
                            <textarea className="message" type="text" name="message" placeholder="Message"></textarea>
                        </div>
                    </CSSTransition>

                    <CSSTransition appear in timeout={1000} classNames="anim_reach_out_button">
                        <button onMouseEnter={AddAnimButton} type="submit">Submit</button>
                    </CSSTransition>
                </form>
            </div>
        )
    };
}