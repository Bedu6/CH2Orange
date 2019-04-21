import React, { Component } from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = ({ dependentsReducer }) => dependentsReducer;

export default connect(mapStateToProps, dependentsActions)(index);