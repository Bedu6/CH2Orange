import React, { Component } from 'react';
import { Input, Row, Icon, Button } from 'react-materialize';
import { connect } from 'react-redux';
import * as commentsActions from '../../actions/commentsActions';
import { CAMBIO_TITULO, CAMBIO_CONTENIDO } from '../../types/Commentypes';
import Loader  from '../loader/Loader'

class Guardar extends Component {
componentDidMount() {
  if (this.props.match.params.id)
      this.props.traerUnComentario(this.props.match.params.id);
  else {
    this.props.cambioInput(CAMBIO_TITULO, '');
    this.props.cambioInput(CAMBIO_CONTENIDO, '');
  }
}

localCambioInput =(event, caso)=> {
    this.props.cambioInput(caso, event.target.value);
}
localGuardar =(event)=>{
  const { titulo, contenido } = this.props;
  const cuerpo = {
    title: this.props.titulo,
    body: this.props.contenido
  }

const id = this.props.match.params.id

  if(id)
     this.props.editar(cuerpo, id);
  else
     this.props.agregar(cuerpo); 
};


render() {
  return (
    <div>
      <Row>
         <Input 
              s={6} 
              m={6} 
              label="Apellido 
              paterno" 
              value={this.props.titulo} 
              onChange={ 
                (event)=> this.localCambioInput(event, CAMBIO_TITULO)
              
              }
          >
             <Icon>face</Icon>
         </Input>
         <Input 
              s={6} 
              m={6} 
              label="Apellido 
              materno" 
              value={this.props.titulo} 
              onChange={ 
                (event)=> this.localCambioInput(event, CAMBIO_TITULO)
              
              }
          >
             <Icon>face</Icon>
         </Input>
      </Row>
      <Row>
         <Input 
              s={6} 
              m={6} 
              label="Nombre" 
              value={this.props.contenido}
              onChange={ 
                (event)=> this.localCambioInput(event, CAMBIO_CONTENIDO)
              
              }
              >
             <Icon>input</Icon>
            
         </Input>
         <Input 
              s={6} 
              m={6} 
              label="Edad" 
              value={this.props.contenido}
              onChange={ 
                (event)=> this.localCambioInput(event, CAMBIO_CONTENIDO)
              
              }
              >
             <Icon>input</Icon>
            
         </Input>

      </Row>
      {this.props.mensaje}
      <Row className="center-align">
          <Button 
          className= {(this.props.loading) ? 'disabled' : '' }
          waves='light'
          onClick={ this.localGuardar }
          >
          Guardar
          <Icon left>save</Icon>
          </Button>
      </Row>

      {(this.props.loading) ? <Loader /> : '' }
    

    </div>
  )
}
  
};

const mapStateToProps = ({ commentsReducers }) => commentsReducers;


export default connect(mapStateToProps, commentsActions)(Guardar);