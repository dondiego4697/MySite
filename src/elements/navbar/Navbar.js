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
        const listItems = Object.keys(this.props.navList).map((key) => {
            return <li key={`li-${key.toString()}`}><a href={`#${key.toString()}`} className="menu-smooth-scroll">{this.props.navList[key]}</a>
            </li>;
        });

        return (
            <nav className="navbar">
                <div className="navbar__nav-wrapper">
                    <a href="#home" className="brand-logo">
                        <img src="/src/img/logo.png" alt=""/>
                    </a>
                    <ul>
                        {listItems}
                    </ul>
                </div>
            </nav>
        );
    }
}