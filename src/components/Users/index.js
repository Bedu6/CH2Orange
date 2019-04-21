import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import * as usersActions  from '../../actions/usersActions';
import Loading from '../General/Loading';
import CustomError from '../General/CustomError';
import UsersTable from './UsersTable';

class index extends Component {

    componentDidMount() {
        if (!this.props.users.length) {
            this.props.readUsers();
        }
    }
    
    loadContent = () => {
        if (this.props.loading)
            return <Loading />
        else if (this.props.error)
            return <CustomError message = { this.props.error } />
        else
            return <UsersTable rows = { this.showDataInTable() } />
    }

    showDataInTable = () => (
        this.props.users.map((user) => (
            <tr key = { user._id } >
                <td>{ user.apellidos.paterno }</td>
                <td>{ user.apellidos.materno }</td>
                <td>{ user.nombre }</td>
                <td>{ user.edad }</td>
                <td>
                    <Link
                        to = { `/users/${ user._id }/dependents`}
                        className = "pointer"
                    >
                        <Icon>remove_red_eye</Icon>
                    </Link>
                </td>
                <td>
                    <Link
                        to = { `/users/edit/${ user._id }` }
                        className = "pointer"
                    >
                        <Icon>edit</Icon>
                    </Link>
                </td>
                <td>
                    <Link
                        to = { '/' }
                        className = "pointer"
                        onClick = {
                            () => {
                                this.deleteUser(user._id);
                            }
                        }
                    >
                        <Icon>delete</Icon>
                    </Link>
                </td>
            </tr>
        ))
    );

    deleteUser = (id) => {
        this.props.deleteUser(id);
    }

    render() {
        return(
            <div className = "container">
                <div className = "display-flex vertical-center">
                    <h2>Usuarios</h2>
                    <Link
                        icon = "add"
                        to = "/users/new"
                        className = "btn waves-effect waves-light btn-large btn-floating left-space red"
                    >
                        <i className = "material-icons">add</i>
                    </Link>
                </div>
                { this.loadContent() }
            </div>
        );
    }

}

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(index);