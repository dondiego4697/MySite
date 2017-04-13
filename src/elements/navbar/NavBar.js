/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";

import "./mynavbar.css";
import "./__nav-wrapper/mynavbar__nav-wrapper.css";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        $(".button-collapse").sideNav();
    }

    componentWillUnmount() {

    }


    render() {
        const listItems = Object.keys(this.props.navList).map((key) => {
            return <li key={`li-${key.toString()}`}><a href={`#${key.toString()}`}
                                                       className="menu-smooth-scroll">{this.props.navList[key]}</a>
            </li>;
        });

        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo">Logo</a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">Javascript</a></li>
                        <li><a href="mobile.html">Mobile</a></li>
                    </ul>
                </div>
            </nav>
            /*<nav className="mynavbar">
             <div className="mynavbar__nav-wrapper">
             <a href="#home" className="brand-logo">
             <img src="/src/img/logo.png" alt=""/>
             </a>
             <ul>
             {listItems}
             </ul>
             </div>
             </nav>*/
        );
    }
}