import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as comentariosActions from '../../actions/comentariosActions'
import Tabla from './Tabla.js';
import Cargando from '../General/Cargando.js';
import Fatal from '../General/Fatal.js';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import Guardar from './Guardar';



class index extends Component {
	componentDidMount() {
		if (!this.props.comentarios.length)
			this.props.traerComentarios();
	}

	localLlenar = (event) => {
		alert(123);
	};

	desplegar = () => (
		 this.props.comentarios.map((comentario, key) => (
			 <tr key={ key }>
      			<td>{comentario.email}</td>
      			<td>{comentario.body}</td>
      			<td><Icon>visibility</Icon></td>      			
      			<td>
      				<Link to={`/comentarios/editar/${comentario.id}`}
      				>
					  	<Icon>edit</Icon>
					</Link>

      			</td>
      			<td><Icon>delete</Icon></td>
    		</tr>
		))
	);

	ponerContenido = () => {
		if (this.props.cargando)
			return <Cargando />

		if (this.props.error)
			return <Fatal mensaje={ this.props.error }/>

		return <Tabla desplegar={this.desplegar }/>
	};

	render () {
		return (
			<div>  {/* el render solo puede tener un elemento padre */}
				<div className='flex align_center'>  {/* flex alinea a los hijos*/}
					<h2>Usuarios</h2>
					<Link icon="add" to="/comentarios/guardar" class="btn waves-effect waves-light btn-large btn-floating red space">
						<i class="material-icons">add</i>
					</Link>
				</div>
	

				{ this.ponerContenido() }
			</div>
		);
	}
}

const mapStateToProps = ({ comentariosReducer }) => {
	return comentariosReducer;
}

export default connect(mapStateToProps, comentariosActions)(index);