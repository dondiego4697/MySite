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
import ButtonLink from "../button-link/ButtonLink";

import {Col, Grid, Row} from "react-bootstrap";

export default class AboutSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const history = `Hello, I'm a Web and Android Developer from Moscow, Russia. I was born in a small town Yoshkar-Ola. In 2004 I began my studies at the Lyceum named after M.V. Lomonosov and graduated in 2015. Nowadays I study Information Technology at Bauman Moscow State Technical University. I am in my second year, in the "Information processing and control systems" department. I am also studying Software Engeneering. I can handle different kinds of problems, and solve them in various ways in short terms.`;

        const listInfoItems = Object.keys(this.props.infoItemsList).map((key) => {
            return <h5 key={`pd-item-${key.toString().toLowerCase()}`}
                       className="about-section__content__information_item">
                <span>{key.toString()}: </span>{this.props.infoItemsList[key]}</h5>;
        });

        const listSocial = this.props.socialList.map((object) => {
            return <li key={`s-item-${object.href.toString().toLowerCase()}`}><a href={object.href.toString()} target="_blank" className="btn-floating waves-effect waves-light">
                <i className={object.iconClass.toString()}></i></a></li>
        });

        return (
            <section id="about" className="about-section">
                <Grid>
                    <Row>
                        <div className="about-section__content">
                            <Col md={4} sm={12}>
                                <div className="about-section__content__story">
                                    <h3 className="about-section__content__text_subtitle">My story</h3>
                                    <p>{history}</p>
                                    <ButtonLink
                                        data={{
                                            href: 'http://icancv.ru/dondiego/',
                                            name: 'view resume',
                                            isLocale: false,
                                            iconName: 'account_circle'
                                        }}/>
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
                                    <div className="about-section__content__information__social">
                                        <ul>
                                            {listSocial}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                </Grid>
            </section>
        )
    }
}