import React, { Component } from 'react';
import { Card, Col, CardTitle, ProgressBar, Row } from 'react-materialize';
import { connect } from 'react-redux';
import * as fotosActions from '../../actions/fotosActions'
import Cargando from '../General/Cargando.js';
import Fatal from '../General/Fatal.js';

class index extends Component {
	componentDidMount() {
		if (!this.props.fotos.length)
			this.props.traerFotos();
	}
	

	desplegar = () => (
		this.props.fotos.map((foto, key) => (
		 	<Col l={6} s={12} key={key}>
  				<Card horizontal
  					  header={<CardTitle image={foto.url}></CardTitle>} 
  					  actions={[<a href='#'>Link</a>]}>
      				  <p>{ foto.title }</p>
    			</Card>
			</Col>
		))
	);

	ponerContenido = () => {
		if (this.props.cargando)
			return <Cargando />

		if (this.props.error)
			return <Fatal mensaje={ this.props.error }/>

		return (
			<div className='row'>
				{ this.desplegar() }
			</div>
		)
	};

	render () {
	return (
		<div>
    		{ this.ponerContenido() };
		</div>
	);
	}
}

const mapStateToProps = ({ fotosReducer }) => {
	return fotosReducer;
}

export default connect(mapStateToProps, fotosActions)(index);