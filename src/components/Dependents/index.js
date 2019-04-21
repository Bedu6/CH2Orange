import React, { Component } from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import * as dependentsActions from '../../actions/dependentsActions';
import Loader  from '../loader/Loader';
import DependentTable from './DependentTable';
import Fatal from '../loader/Fatal.js';
import { Icon, Col, Row, Card, Button, Modal } from 'react-materialize';
import { Link } from 'react-router-dom';
import Added from './Added';

class index extends Component {

	componentDidMount(){
		
		if(this.props.match.params.id){		
			this.props.getOneUser(this.props.match.params.id);
		}

//		if(!this.props.dependents.length)
			this.props.getDependents(this.props.match.params.id);
	}

  	desplegar = () =>(
	  this.props.dependents.map((dependent, key) => (	

				<Row>
				<Col s={6} m={4}>
					<Card
						key={key}
						className="white"
						textClassName="black-text"
						title={ dependent.nombre_completo }
						
					>
					Edad: { dependent.edad }
					<br/>
					Relacion: { dependent.dependencia }
					<br/>
					<Link to={`/beneficiarios/editar/${dependent._id}`} >
	      				<Icon>edit</Icon>
	      			</Link>
					<a  onClick={ this.deleteDependent }>
			      		<Icon>delete</Icon>
			      	</a>
					</Card>
				</Col>
			</Row>
			

			/*	<tr key={key}>
	      <td>{ beneficiario.nombre_completo }</td>
	      <td>{ beneficiario.edad }</td>
	      <td>
	      	<Link to={`/beneficiarios/editar/${beneficiario._id}`} >
	      		<Icon>edit</Icon>
	      	</Link>
	      </td>
	      <td>
	      	<a  onClick={ this.eliminarBeneficiario }>
	      		<Icon>delete</Icon>
	      	</a>
	      </td>
	    </tr>*/
	  ))
	);


	deleteDependent = () => (
		/*let andy = window.confirm("Eliminar");
		let msg;
		if(andy) {
			msg = "Eliminado";
		}

		alert(msg);*/

		<Modal header="Modal Header" trigger={<Button />}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</p>
	  </Modal>
	);



	putContent = () => {
		
		if(this.props.loader)
			return <Loader/>;

		if(this.props.error)
			return <Fatal mensaje={this.props.error} />;

		return <DependentTable desplegar={ this.desplegar() } />
	};

  render() {
    return (
      <div> 
      	<h2>{this.props.nombre}</h2> 
      	<div className="flex align_center">
	      	<h2>Dependientes</h2>     	
	        <Link 
	        	icon="add" 
	        	to={`/beneficiarios/guardar/${this.props.match.params.id}`} 
	        	className="btn waves-effect waves-light btn-large btn-floating red ml">
	      		
	      		<i className="material-icons" >add</i>
	      	</Link>
      	</div>     

      	<br/><br/>
      	{ this.putContent() } 

      </div>
    );
  } //render
} //Class
=======
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import * as dependentsActions  from '../../actions/dependentsActions';
import Loading from '../General/Loading';
import CustomError from '../General/CustomError';
import DependentsTable from './DependentsTable';
import DependentsAddButton from './DependentsAddButton';

class index extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId;

        if (userId) {
            this.props.readUserDependents(userId);
        }
        else {
            this.props.readDependents();
        }
    }
    
    loadContent = () => {
        if (this.props.loading)
            return <Loading />
        else if (this.props.error)
            return <CustomError message = { this.props.error } />
        else
            return <DependentsTable rows = { this.showDataInTable() } />
    }

    showDataInTable = () => (
        this.props.dependents.map((dependent) => (
            <tr key = { dependent._id } >
                <td>{ dependent.nombre_completo }</td>
                <td>{ dependent.edad }</td>
                <td>{ dependent.dependencia }</td>
                <td>
                    <Link
                        to = { `/users/${ dependent._usuario }/dependents/edit/${ dependent._id }`}
                        className = "pointer"
                    >
                        <Icon>edit</Icon>
                    </Link>
                </td>
                <td>
                    <Link
                        to = { (this.props.routeFlag) ? `/users/${ this.props.match.params.userId }/dependents` : `/dependents` }
                        className = "pointer"
                        onClick = {
                            () => {
                                this.deleteDependent(dependent._id, dependent._usuario, this.props.routeFlag);
                            }
                        }
                    >
                        <Icon>delete</Icon>
                    </Link>
                </td>
            </tr>
        ))
    );

    deleteDependent = (dependentId, userId, routeFlag) => {
        this.props.deleteDependent(dependentId, userId, routeFlag);
    }

    render() {
        return(
            <div className = "container">
                <div className = "display-flex vertical-center">
                    <h2>Dependientes</h2>
                    { (this.props.match.params.userId) ? <DependentsAddButton userId = { this.props.match.params.userId } /> : "" }
                </div>
                { this.loadContent() }
            </div>
        );
    }

}
>>>>>>> cristian

const mapStateToProps = ({ dependentsReducer }) => dependentsReducer;

export default connect(mapStateToProps, dependentsActions)(index);