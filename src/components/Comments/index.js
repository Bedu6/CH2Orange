import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon, Modal, Col } from 'react-materialize';
import Tabla from './Tabla';
import Loader from '../loader/Loader';
import Fatal from '../loader/Fatal';
import { Link } from 'react-router-dom';
import Agregar from './Agregar';
import * as commentsActions from '../../actions/commentsActions';



class index extends Component {
  componentDidMount(){
      if(!this.props.comments.length)
        this.props.pullComments();
  }

  desplegar = () => (
    this.props.comments.map((comentario, key) =>(
<tr>
      <td>{comentario.email}</td>
      <td>{comentario.body}</td>
      <td>
      
          <Link 
                to={`/comments/editar/${comentario.id}`} 
                className="pointer"
          >
                <Icon>edit</Icon>
          </Link>
      </td>
      
    </tr>
    ))
  );

  ponerContenido = () => {
    if (this.props.loading)
        return <Loader />
    if (this.props.error)
        return <Fatal mensaje={this.props.error}/>
    return(
      <Tabla desplegar={this.desplegar()}/>
    )
  }

  render() {
   
    return(
      <div>
        <div className="flex align_center">
            <h2>Comentarios</h2>
            

            <Link 
                  icon="add" 
                  to="/comments/guardar" 
                  class="btn waves-effect waves-light btn-large btn-floating red space"
                  >
                    <i class="material-icons">
                    add
                    </i>
            </Link>
        </div>
    
        



        {this.ponerContenido()}
      </div>
    );
  }
}
const mapStateToProps = ({ commentsReducers }) => {
  return commentsReducers;
}

export default  connect(mapStateToProps, commentsActions)(index);