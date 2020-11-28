import React from "react";
import NavBar from "./NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Routes/About";
import Projects from "./Routes/Projects";
import Contacts from "./Routes/Contacts";
import BurgerMenu from "../scripts/BurgerMenu";

export default function() {
    return(
        <div className="window">
            <BrowserRouter>
                <button onClick={BurgerMenu} className="menu-btn">
                    <div className="burger"></div>
                </button>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route exact path="/projects" component={Projects}/>
                    <Route exact path="/contacts" component={Contacts}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
