import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import * as usersActions  from '../../actions/usersActions';
import Loading from '../General/Loading';
import CustomError from '../General/CustomError';
import UsersTable from './UsersTable';

class index extends Component {

    showDataInTable = () => (
        this.props.users.map((user) => (
            <tr key = { user._id } >
                <td>{ user.apellidos }</td>
                <td>{ user.apellidos }</td>
                <td>{ user.nombre }</td>
                <td>{ user.edad }</td>
                <td>
                    <Link
                        to = { '/' }
                        className = "pointer"
                    >
                        <Icon>edit</Icon>
                    </Link>
                </td>
            </tr>
        ))
    );

    loadContent = () => {
        if (this.props.loading)
            return <Loading />
        else if (this.props.error)
            return <CustomError message = { this.props.error } />
        else
            return <UsersTable rows = { this.showDataInTable() } />
    };

    render() {
        return(
            <div className = "container">
                <div className = "display-flex vertical-center">
                    <h2>Usuarios</h2>
                    <Link icon = "add" to = "/" className = "btn waves-effect waves-light btn-large btn-floating left-space red">
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