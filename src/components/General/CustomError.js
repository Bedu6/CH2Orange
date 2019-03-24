import React from 'react';
import { Icon } from  'react-materialize';

const CustomError = (props) => (
    <div className = "center-align">
        <br />
        <Icon className = "red-text" large>error</Icon>
        <h4>
            { props.message }
        </h4>
    </div>
);

export default CustomError;