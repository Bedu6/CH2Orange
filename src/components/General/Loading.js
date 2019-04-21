import React from 'react';
import { Preloader } from 'react-materialize';

const Loading = (props) => (
    <div className = "center-align">
        <br />
        <br />
        <Preloader size = 'big'/>
    </div>
);

export default Loading;