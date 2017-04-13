/**
 * Created by Denis on 12.04.2017.
 */
import * as React from "react";
import "./about-section.css";
import "./__content/about-section__content.css";
import "./__content/__avatar/about-section__content__avatar.css";
import "./__content/__information/about-section__content__information.css";
import "./__content/__story/about-section__content__story.css";
import "./__content/__text/about-section__content__text.css";

import {Col, Grid, Row} from "react-bootstrap";

import ButtonLink from "../button-link/ButtonLink";
export default class AboutSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const listInfoItems = Object.keys(this.props.infoItemsList).map((key) => {
            return <h5 key={`pd-item-${key.toString().toLowerCase()}`}
                       className="about-section__content__information_item">
                <span>{key.toString()}: </span>{this.props.infoItemsList[key]}</h5>;
        });
        return (
            <section id="about" className="about-section">
                <Grid>
                    <Row>
                        <Col md={4} sm={12}>
                            <div className="about-section__content__story">
                                <h3 className="about-section__content__text_subtitle">My story</h3>
                                <p>Hello, I'm a Web and Android Developer from Moscow, Russia. I was born in a small
                                    town
                                    Yoshkar-Ola.
                                    In 2004 I started to study at Lyceum named after M.V. Lomonosov and graduated in
                                    2015 year.
                                    Nowadays I study Information Technology,
                                    at Bauman Moscow State Technical University in the second year, at the department
                                    "Information
                                    processing and control systems"
                                    and in the same study Software Engeneering.
                                    I can handle different kind of problems, and solve them in different ways in short
                                    terms.
                                </p>
                                <ButtonLink
                                    data={{href: 'http://icancv.ru/dondiego/', name: 'view resume', isLocale: false}}/>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="about-section__content__avatar">
                                <img src="/src/img/me.jpg"/>
                            </div>
                        </Col>
                        <Col md={4} sm={6}>
                            <div className="about-section__content__information">
                                <h3 className="about-section__content__text_subtitle">Personal information</h3>
                                {listInfoItems}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
            /*<section id="about" className="about-section">
             <div className="about-section__content">
             <div className="about-section__content__story">
             <h3 className="about-section__content__text_subtitle">My story</h3>
             <p>Hello, I'm a Web and Android Developer from Moscow, Russia. I was born in a small town
             Yoshkar-Ola.
             In 2004 I started to study at Lyceum named after M.V. Lomonosov and graduated in 2015 year.
             Nowadays I study Information Technology,
             at Bauman Moscow State Technical University in the second year, at the department
             "Information
             processing and control systems"
             and in the same study Software Engeneering.
             I can handle different kind of problems, and solve them in different ways in short terms.
             </p>
             <ButtonLink data={{href: 'http://icancv.ru/dondiego/', name: 'view resume', isLocale: false}}/>
             </div>
             <div className="about-section__content__avatar">
             <img className="avatar_me" src="/src/img/me.jpg"/>
             </div>
             <div className="about-section__content__information">
             <h3 className="about-section__content__text_subtitle">Personal information</h3>
             {listInfoItems}
             </div>
             </div>
             </section>*/
        )
    }
}