/**
 * Created by Denis on 09.04.2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const elem = (
        <div>
            <h1>Opa</h1>
            <h2>Now is {new Date().toLocaleTimeString()}!</h2>
        </div>
    );
    ReactDOM.render(
        elem,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

