/**
 * Created by Denis on 11.04.2017.
 */
import * as React from "react";
export default class TestClass extends React.Component {
    render() {
        return (
            <div className="User">
                <this.avatar user={this.props.user}/>
                <h1>Hello, {this.props.user.name}</h1>
                <h1>Hello, {this.props.user.age}</h1>
            </div>
        );
    }

    avatar(props) {
        console.log(props);
        return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name}/>;
    }
}

