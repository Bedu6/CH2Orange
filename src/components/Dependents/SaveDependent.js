import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Icon, Button } from 'react-materialize';
import * as dependentsActions from '../../actions/dependentsActions';
import { CHANGEFULLNAME, CHANGEAGE, CHANGEDEPENDENCETYPE } from '../../types/dependentsTypes';
import Loading from '../General/Loading';

class Save extends Component {

    componentDidMount() {
        const dependentId = this.props.match.params.dependentId;
        
        if (dependentId) {
            this.props.readDependent(dependentId);
        }
        else {
            this.props.changeInput(CHANGEFULLNAME, '');
            this.props.changeInput(CHANGEAGE, '');
            this.props.changeInput(CHANGEDEPENDENCETYPE, '');
        }
    }

    changeInput = (event, type) => {
        this.props.changeInput(type, event.target.value);
    }

    setDependent = () => {
		if (this.props.fullName.length === 0 || this.props.age.length === 0 || this.props.dependenceType.length === 0) {
			window.Materialize.toast(
				'Ingrese todos los datos',
				3000
			);

			return;
		}
		else if (this.props.fullName.trim().length === 0 || this.props.age.trim().length === 0 || this.props.dependenceType.trim().length === 0) {
			window.Materialize.toast(
				'Ingrese datos válidos',
				3000
			);

			return;
		}
		else if (isNaN(this.props.age)) {
			window.Materialize.toast(
				'Ingrese una edad válida',
				3000
			);

			return;
		}

        const dependent = {
            nombre_completo: this.props.fullName,
            edad: this.props.age,
            dependencia: this.props.dependenceType,
            _usuario: this.props.match.params.userId
        };
        const dependentId = this.props.match.params.dependentId;
        
        if (dependentId) {
            this.props.updateDependent(dependent, dependentId);
        }
        else {
            this.props.createDependent(dependent);
        }
	}
	
    render() {
        return(
            <div className = "container">
                <div className = "row top-space">
                    <Input
                        s = { 12 }
                        label = "Nombre Completo"
						value = { this.props.fullName }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGEFULLNAME);
                            }
                        }
                    >
                        <Icon className = "material-icons">label_outline</Icon>
                    </Input>
					<Input
                        s = { 12 }
                        label = "Edad"
						value = { this.props.age }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGEAGE);
                            } 
                        }
                    >
                        <Icon className = "material-icons">label_outline</Icon>
                    </Input>
					<Input
                        s = { 12 }
                        label = "Tipo de Dependencia"
						value = { this.props.dependenceType }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGEDEPENDENCETYPE);
                            } 
                        }
                    >
                        <Icon className = "material-icons">label_outline</Icon>
                    </Input>
                </div>
                <div className = "display-flex horizontal-center">
                    <Button
                        waves = "light"
                        onClick = { this.setDependent }
                        className = { (this.props.loading) ? "disabled" : "" }
                    >
                        Guardar
                        <Icon left>save</Icon>
                    </Button>
                </div>
				<div className = "display-flex horizontal-center">
					<Link
                        icon = "cancel"
                        to = { (this.props.routeFlag) ? `/users/${ this.props.match.params.userId }/dependents` : `/dependents` }
                        className = "btn waves-effect waves-light red"
                    >
						Cancelar
                        <i className = "material-icons left">cancel</i>
                    </Link>
                </div>
                { (this.props.loading) ? <Loading /> : "" }
            </div>
        );
    }
};

const mapStateToProps = ({ dependentsReducer }) => dependentsReducer;

export default connect(mapStateToProps, dependentsActions)(Save);