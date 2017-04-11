/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";

import "./navbar.css";
import "./__nav-wrapper/navbar__nav-wrapper.css";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar__nav-wrapper">
                    <a href="#home" className="brand-logo">
                        <img src="/src/img/logo.png" alt=""/>
                    </a>
                    <ul>
                        <li><a href="#about" className="menu-smooth-scroll">About Me</a>
                        </li>
                        <li><a href="#resume" className="menu-smooth-scroll">Resume</a>
                        </li>
                        <li><a href="#portfolio" className="menu-smooth-scroll">Portfolio</a>
                        </li>
                        <li><a href="#contact" className="menu-smooth-scroll">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}