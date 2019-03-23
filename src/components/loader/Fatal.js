import React from 'react';
import {Col, Icon } from 'react-materialize'

const Fatal =(props)=> {
  return(
      <div className="center-align">
      <br />
            <Icon className="red-text" large>bug_report</Icon>
            <br />
            <h2>
              {props.mensaje}
            </h2>
      </div>
  )};

export default Fatal;

