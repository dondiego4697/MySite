/**
 * Created by Denis on 11.04.2017.
 */
import "./main-section.css";
import * as React from "react";
import Navbar from "../navbar/Navbar";
export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar
                navList={{about: 'About Me', resume: 'Resume', portfolio: 'Portfolio', contact: 'Contact'}}/>
            </div>
        )
    }
}