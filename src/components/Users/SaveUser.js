import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Input, Icon, Button } from 'react-materialize';
import * as usersActions from '../../actions/usersActions';
import { CHANGENAME, CHANGEFIRSTLASTNAME, CHANGESECONDLASTNAME, CHANGEAGE } from '../../types/usersTypes';
import Loading from '../General/Loading';

class Save extends Component {

    componentDidMount() {
        const userId = this.props.match.params.userId;

        if (userId) {
            this.props.readUser(userId);
        }
        else {
            this.props.changeInput(CHANGENAME, '');
			this.props.changeInput(CHANGEFIRSTLASTNAME, '');
			this.props.changeInput(CHANGESECONDLASTNAME, '');
			this.props.changeInput(CHANGEAGE, '');
        }
    }

    changeInput = (event, type) => {
        this.props.changeInput(type, event.target.value);
    }

    setUser = () => {
		if (this.props.name.length === 0 || this.props.firstLastName.length === 0 || this.props.secondLastName.length === 0 || this.props.age.length === 0) {
			window.Materialize.toast(
				'Ingrese todos los datos',
				3000
			);

			return;
		}
		else if (this.props.name.trim().length === 0 || this.props.firstLastName.trim().length === 0 || this.props.secondLastName.trim().length === 0 || this.props.age.trim().length === 0) {
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

        const user = {
            nombre: this.props.name,
            apellidos: {
				paterno: this.props.firstLastName,
				materno: this.props.secondLastName
			},
			edad: this.props.age
        };
        const userId = this.props.match.params.userId;
        
        if (userId) {
            this.props.updateUser(user, userId);
        }
        else {
            this.props.createUser(user);
        }
	}
	
    render() {
        return(
            <div className = "container">
                <div className = "row top-space">
                    <Input
                        s = { 12 }
                        label = "Nombre(s)"
						value = { this.props.name }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGENAME);
                            }
                        }
                    >
                        <Icon className = "material-icons">label_outline</Icon>
                    </Input>
					<Input
                        s = { 6 }
                        label = "Apellido Paterno"
						value = { this.props.firstLastName }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGEFIRSTLASTNAME);
                            } 
                        }
                    >
                        <Icon className = "material-icons">label_outline</Icon>
                    </Input>
					<Input
                        s = { 6 }
                        label = "Apellido Materno"
						value = { this.props.secondLastName }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGESECONDLASTNAME);
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
                </div>
                <div className = "display-flex horizontal-center">
                    <Button
                        waves = "light"
                        onClick = { this.setUser }
                        className = { (this.props.loading) ? "disabled" : "" }
                    >
                        Guardar
                        <Icon left>save</Icon>
                    </Button>
                </div>
				<div className = "display-flex horizontal-center">
					<Link
                        icon = "cancel"
                        to = "/"
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

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(Save);