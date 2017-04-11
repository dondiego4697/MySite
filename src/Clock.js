/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";
export default class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        console.log(props);
        console.log(this.state);
    }

    componentDidMount() {
        this.timerID = setInterval(()=>this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Opa</h1>
                <h2>Now is {this.state.date.toLocaleTimeString()}!</h2>
            </div>
        );
    }
}