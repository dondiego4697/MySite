/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";
import "./home-section.scss";
import "./__content/home-section__content.scss";
import "./__content/__text/home-section__content__text.scss";
import "./__call-to-area/home-section__call-to-area.scss";
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
                                        {/*<ButtonLink data={{href: 'contacts', name: 'hire me', isLocale: true, iconName: 'send'}}/>*/}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                    <div className="home-section__call-to-area">
                        <a href="#about" className="btn-floating btn-large home-section__call-to-area__fab scale-transition">
                            <i className="material-icons">keyboard_arrow_down</i>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}