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
        return (
            <a href={`#${this.props.data.href}`} className="button-link">{this.props.data.name}</a>
        )
    }
}