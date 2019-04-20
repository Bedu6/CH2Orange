import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row } from 'react-materialize';
import * as dependentsActions from '../../actions/dependentsActions';
import { CHANGENAME, CHANGERELATION, CHANGEAGE, 
		 USER_ID} from '../../types/dependentsTypes';
import Loader  from '../loader/Loader';

class Added extends Component {

	componentDidMount() {

		if(this.props.match.params.id){
			console.log("editar");
			this.props.getOneDependent(this.props.match.params.id);
		}
		else {
			console.log("nuevo");
			this.props.changeInput(CHANGENAME, '');
			this.props.changeInput(CHANGERELATION	, '');
			this.props.changeInput(CHANGEAGE	, '');
		}
	}

	localChangeInput = (event, caso) => {
		this.props.changeInput(caso, event.target.value);
	};

	localAdded = (event) => {
		const dependent = 
		{
			nombre_completo: this.props.nombre,
			dependencia: this.props.relacion,
			edad: this.props.edad,
			"_usuario": this.props.match.params.usuario_id
		}

		const id = this.props.match.params.id
		if(id)
		   this.props.edited(dependent, id);
		else
			this.props.added(dependent);
	};

	render() {
		return (
			<div>
				<div className='row'>
					<Input
						s={6}
						label="Nombre"
						value={ this.props.nombre }
						onChange={
							(event) => this.localChangeInput(event, CHANGENAME)
						}
					>
					</Input>

					<Input
						s={6}
						label="Relacion"
						value={ this.props.relacion }
						onChange={
							(event) => this.localChangeInput(event, CHANGERELATION)
						}
					>
					</Input>


					<Input
						s={6}
						label="Edad"
						value={ this.props.edad }
						onChange={
							(event) => this.localChangeInput(event, CHANGEAGE)
						}
					>
					</Input>
				</div>
				<div className="flex justify_center">
					<Button className="btn btn_cancelar mr">Cancelar</Button>
					<Button className="btn btn_guardar" onClick={ this.localAdded } >Guardar</Button>
				</div>

				{ (this.props.loader) ? <Loader /> : '' }
			</div>
		)
	}	
};

const mapStateToProps = ({ dependentsReducer }) => dependentsReducer;

export default connect(mapStateToProps, dependentsActions)(Added);