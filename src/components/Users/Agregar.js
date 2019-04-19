import React, { Component } from 'react';
import { Input, Row, Icon, Button } from 'react-materialize';
import { connect } from 'react-redux';
import * as usersActions from '../../actions/usersActions';
import { GET, ERROR, LOADING, CHANGENAME, 
  CHANGEFIRSTLASTNAME, CHANGESECONDLASTNAME, CHANGEAGE, 
  USERCREATED, USERUPDATED, USERDELETED 
} from '../../types/usersTypes';
import Loader  from '../loader/Loader'

class Guardar extends Component {
componentDidMount() {
  if (this.props.match.params.id)
      this.props.getUsers(this.props.match.params.id);
  else {
    this.props.changeInput(CHANGENAME, '');
    this.props.changeInput(CHANGEFIRSTLASTNAME, '');
    this.props.changeInput(CHANGESECONDLASTNAME, '');
    this.props.changeInput(CHANGEAGE, '');
    
  }
}

localChangeInput =(event, caso)=> {
    this.props.changeInput(caso, event.target.value);
}
localGuardar =(event)=>{

  
  const user = {
    nombre: this.props.nombre,
    apellidos:{
      paterno: this.props.apellido_paterno,
      materno: this.props.apellido_materno,
    },
    
    edad: this.props.edad
  }

const id = this.props.match.params.id

  if(id)
     this.props.edit(user, id);
  else
     this.props.added(user); 
};


render() {
  return (
    <div>
      <Row>
      <Input
						s={6}
						label="Nombre"
						value={ this.props.nombre }
						onChange={
							(event) => this.localCambioInput(event, CHANGENAME)
						}
					>
					</Input>
         <Input 
              s={6} 
              m={6} 
              label="Apellido 
              paterno" 
              value={this.props.nombre} 
              onChange={ 
                (event)=> this.localChangeInput(event, CHANGEFIRSTLASTNAME)
              
              }
          >
             <Icon>face</Icon>
         </Input>
         <Input 
              s={6} 
              m={6} 
              label="Apellido 
              materno" 
              value={this.props.apellido_paterno} 
              onChange={ 
                (event)=> this.localCambioInput(event, CHANGESECONDLASTNAME)
              
              }
          >
             <Icon>face</Icon>
         </Input>
      </Row>
      <Row>
         <Input 
              s={6} 
              m={6} 
              label="Edad" 
              value={this.props.edad}
              onChange={ 
                (event)=> this.localChangeInput(event, CHANGEAGE)
              
              }
              >
             </Input>
				</Row>
				<div className="flex justify_center">
					<Button className="btn btn_cancelar mr">Cancelar</Button>
					<Button className="btn btn_guardar" onClick={ this.localGuardar } >Guardar</Button>
				</div>

				{ (this.props.cargando) ? <Loader /> : '' }
			</div>
		)
	}	
};

const mapStateToProps = ({ usersReducer }) => usersReducer;


export default connect(mapStateToProps, usersActions)(Guardar);