import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button } from 'react-materialize';
import * as comentariosActions from '../../actions/comentariosActions';
import { CAMBIO_TITULO, CAMBIO_CONTENIDO } from '../../types/comentariosTypes';
import Cargando from '../General/Cargando';

class Guardar extends Component {

	componentDidMount() {

		if(this.props.match.params.id)
			this.props.traerUnComentario(this.props.match.params.id);
		else {
			this.props.cambioInput(CAMBIO_TITULO, '');
			this.props.cambioInput(CAMBIO_CONTENIDO, '');
		}
	}

	localCambioInput = (event, caso) => {
		this.props.cambioInput(caso, event.target.value);
	};

	localGuardar = (event) => {
		const cuerpo = {
			title: this.props.titulo,
			body:  this.props.contenido
		}

		const id=this.props.match.params.id

		if (id)  

			this.props.editar(cuerpo, id);

		else  

			this.props.agregar(cuerpo);
	};

	render() {
		return (
			<div>
				<br />
				<div className='row'>
					<Input
						s={12}
						label="Título"
						value={ this.props.titulo }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_TITULO)
						}
					>
						<Icon>input</Icon>
					</Input>

					<Input
						s={12}
						label="Contenido"
						type='textarea'
						value={ this.props.contenido }
						onChange={
							(event) => this.localCambioInput(event, CAMBIO_CONTENIDO)
						}
					>
						<Icon>account_circle</Icon>
					</Input>
				</div>
				
				{ this.props.mensaje }
				<div className='center-align'>
					<Button
						className={
							(this.props.cargando) ? 'disabled' : ''
						}
						waves='light'
						onClick={ this.localGuardar }
					>
						Guardar
						<Icon left>save</Icon>
					</Button>
				</div>

				{ (this.props.cargando) ? <Cargando /> : '' }
			</div>
		)
	}
};

const mapStateToProps = ({ comentariosReducer }) => comentariosReducer;

export default connect(mapStateToProps, comentariosActions)(Guardar);