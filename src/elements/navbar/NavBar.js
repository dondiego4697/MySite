/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";

import "./mynavbar.scss";
import "./__nav-wrapper/mynavbar__nav-wrapper.scss";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.prevScroll = 0;
    }

    componentDidMount() {
        this.prevScroll = window.pageYOffset;
        document.documentElement.addEventListener('click', this.clickListener.bind(this));
        window.addEventListener('scroll', this.scrollListener.bind(this));
    }

    componentWillUnmount() {
        document.documentElement.removeEventListener('click', this.clickListener, false);
        window.removeEventListener('scroll', this.scrollListener.bind(this));
    }

    scrollListener() {
        let currScroll = window.pageYOffset;
        if (window.pageYOffset > 100 && this.prevScroll < currScroll) {
            this.navEl.classList.add('mynavbar_hidden');
            this.navEl.classList.remove('mynavbar_show');
        } else if (window.pageYOffset > 100 && this.prevScroll > currScroll) {
            this.navEl.classList.add('mynavbar_show');
            this.navEl.classList.remove('mynavbar_hidden');
        }
        this.prevScroll = currScroll;
    }

    clickListener() {
        if (event.target instanceof HTMLAnchorElement && event.target.getAttribute('href').match(/^#/)) {
            event.preventDefault();
            this.scroll(event.target.getAttribute('href'));
        } else if (event.target.parentElement instanceof HTMLAnchorElement
            && event.target.parentElement.getAttribute('href').match(/^#/)) {
            event.preventDefault();
            this.scroll(event.target.parentElement.getAttribute('href'));
        }
    }

    scroll(href) {
        const top = $(href).offset().top;
        $('body, html').stop().animate({scrollTop: top}, 350);
    }

    render() {
        const listItems = Object.keys(this.props.navList).map((key) => {
            return <li key={`li-${key.toString()}`}><a id={this.props.navList[key].id} href={`#${key.toString()}`}>{this.props.navList[key].name}</a></li>;
        });

        return (
            <nav className="mynavbar"
                 ref={(nav) => {
                     this.navEl = nav
                 }}>
                <div className="mynavbar__nav-wrapper">
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