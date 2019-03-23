import React from 'react';
import { Col, Preloader } from 'react-materialize';



const Loader = (props) => (
  <div className="center-align"> 
  <br /><br />
  <Col s={4}>
    <Preloader size='big'/>
  </Col>
  </div>
);

export default Loader;