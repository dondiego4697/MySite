/**
 * Created by Denis on 09.04.2017.
 */
import React from "react";
import ReactDOM from "react-dom";

import MainSection from "./src/elements/main-section/MainSection";

ReactDOM.render(
    <MainSection />,
    document.body
);


/*ReactDOM.render(
 <Clock />,
 document.getElementById('clock')
 );


 function render() {
 const user = {
 name: 'den',
 age: 19,
 avatarUrl: '/src/img/conor.png'
 };
 const elem = <TestClass user={user}/>;
 ReactDOM.render(
 elem,
 document.getElementById('root')
 )
 }

render();
*/