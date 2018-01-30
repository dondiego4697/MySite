/**
 * Created by Denis on 11.04.2017.
 */
import "./main-section.scss";
import * as React from "react";
import NavBar from "../navbar/NavBar";
import HomeSection from "../home-section/HomeSection";
import AboutSection from "../about-section/AboutSection";
export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }


    render() {
        return (
            <div>
                <NavBar
                    navList={{about: {name: 'About Me', id: 'nav_about-me'}}}/>
                <HomeSection data={{name: 'Denis Stepanov', subtitle: 'Web developer from Moscow'}}/>
                <AboutSection infoItemsList={
                    {
                        Name: 'Denis Stepanov', Age: `${Math.floor((Date.now() - new Date(1997, 5, 4)) / 1000 / 3600 / 24 / 365) } Years`, Phone: '+79877135532',
                        Email: 'dondiego4697@mail.ru', Address: 'Moscow'
                    }}
                              socialList={[{href: 'https://vk.com/proudraccoon', iconClass: 'fa fa-vk'},
                                  {href: 'https://github.com/dondiego4697', iconClass: 'fa fa-github'},
                                  {href: 'mailto:dondiego4697@mail.ru', iconClass: 'fa fa-envelope-o'},
                                  {href: 'https://t.me/Dondiego4697', iconClass: 'fa fa-telegram'}]}
                />
            </div>
        )
    }
}