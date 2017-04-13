/**
 * Created by Denis on 11.04.2017.
 */
import "./main-section.css";
import * as React from "react";
import NavBar from "../navbar/NavBar";
import HomeSection from "../home-section/HomeSection";
import AboutSection from "../about-section/AboutSection";
export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar
                    navList={{about: 'About Me', resume: 'Resume', portfolio: 'Portfolio', contact: 'Contact'}}/>
                <HomeSection data={{name: 'Denis Stepanov', subtitle: 'Web & Android developer from Moscow'}}/>
                <AboutSection infoItemsList ={{Name: 'Denis Stepanov', Age: '19 Years', Phone: '+0123456789',
                Email: 'email@yahoo.com', Address: 'Moscow'}}/>
            </div>
        )
    }
}