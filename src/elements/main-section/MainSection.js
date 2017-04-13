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

    componentDidMount() {
        document.documentElement.addEventListener('click', event => {
            if (event.target instanceof HTMLAnchorElement && event.target.getAttribute('href').match(/^#/)) {
                event.preventDefault();
                this.scroll(event.target.getAttribute('href'));
            } else if (event.target.parentElement instanceof HTMLAnchorElement
                    && event.target.parentElement.getAttribute('href').match(/^#/)) {
                event.preventDefault();
                this.scroll(event.target.parentElement.getAttribute('href'));
            }
        })
    }

    componentWillUnmount() {
        document.documentElement.removeEventListener('click', event => {

        }, false);
    }

    scroll(href){
        const top = $(href).offset().top;
        $('body, html').stop().animate({scrollTop: top}, 350);
    }


    render() {
        return (
            <div>
                <NavBar
                    navList={{about: 'About Me', resume: 'Resume', portfolio: 'Portfolio', contact: 'Contact'}}/>
                <HomeSection data={{name: 'Denis Stepanov', subtitle: 'Web & Android developer from Moscow'}}/>
                <AboutSection infoItemsList ={{Name: 'Denis Stepanov', Age: '19 Years', Phone: '+0123456789',
                Email: 'email@yahoo.com', Address: 'Moscow'}}
                              socialList={[{href: 'https://vk.com/proudraccoon', iconClass: 'fa fa-vk'},
                                  {href: 'https://github.com/dondiego4697', iconClass: 'fa fa-github'},
                                  {href: 'mailto:dondiego4697@mail.ru', iconClass: 'fa fa-envelope-o'},
                                  {href: 'https://t.me/Dondiego4697', iconClass: 'fa fa-telegram'}]}
                />
            </div>
        )
    }
}