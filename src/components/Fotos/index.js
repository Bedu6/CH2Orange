import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Card, CardTitle } from 'react-materialize';
import * as fotosActions from '../../actions/fotosActions';
import Cargando from '../loader/Loader';
import Fatal from '../loader/Fatal';

class index extends Component {
	componentDidMount() {
		if (!this.props.fotos.length)
			this.props.traerFotos();
	}

	desplegar = () => (
		this.props.fotos.map((elemento, key) => (
			<Col s={12} l={6} key={key}>
				<Card
					horizontal
					header={
						<CardTitle image={ elemento.url }></CardTitle>
					}
				>
					<p>{ elemento.title }</p>
				</Card>
			</Col>
		))
	);

	ponerContenido = () => {
		if (this.props.cargando)
			return <Cargando />

		if (this.props.error)
			return <Fatal mensaje={ this.props.error } />

		return (
			<div className='row'>
				{ this.desplegar() }
			</div>
		)
	};

	render() {
		return (
			<div>
				{ this.ponerContenido() }
			</div>
		);
	}
}

const mapStateToProps = ({ fotosReducers }) => {
	return fotosReducers;
}

export default connect(mapStateToProps, fotosActions)(index);