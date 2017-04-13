/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";
import "./home-section.css";
import "./__content/home-section__content.css";
import "./__content/__text/home-section__content__text.css";
import "./__call-to-area/home-section__call-to-area.css";
import ButtonLink from "../button-link/ButtonLink";

import {Col, Grid, Row} from "react-bootstrap";

export default class HomeSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="home" className="home-section">
                <div className="home-section__sec-overlay">
                    <Grid>
                        <Row>
                            <Col sm={12}>
                                <div className="home-section__content">
                                    <div className="home-section__content__info">
                                        <h1 className="home-section__content__text_title">Hi! I'm&nbsp;
                                            <span>{this.props.data.name}</span>
                                        </h1>
                                        <h2 className="home-section__content__text_subtitle">{this.props.data.subtitle}</h2>
                                        <ButtonLink data={{href: 'contacts', name: 'hire me', isLocale: true}}/>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <div className="home-section__call-to-area">
                        <a href="#about" className="btn-floating btn-large home-section__call-to-area__fab">
                            <i className="mdi-navigation-expand-more"></i></a>
                    </div>
                </div>
            </section>
        )
    }
}