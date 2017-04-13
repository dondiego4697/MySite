/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";
import "./button-link.css";

export default class ButtonLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data.isLocale) {
            return (
                <a href={`#${this.props.data.href}`} className="waves-effect waves-light btn-large button-link">
                    <i className="material-icons">{this.props.data.iconName}</i>
                    {this.props.data.name}
                </a>
            )
        } else {
            return (
                <a href={this.props.data.href} className="waves-effect waves-light btn-large button-link"
                   target="_blank">
                    <i className="material-icons">{this.props.data.iconName}</i>
                    {this.props.data.name}
                </a>
            )
        }
    }
}