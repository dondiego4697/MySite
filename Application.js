/**
 * Created by Denis on 09.04.2017.
 */
import React from "react";
import ReactDOM from "react-dom";

import MainSection from "./src/elements/main-section/MainSection";

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import MaterializeCss from 'materialize-css/dist/css/materialize.css';
import MaterializeJs from 'materialize-css/dist/js/materialize';
//TODO preloader materialize
ReactDOM.render(
    <MainSection/>,
    document.getElementById('app')
);