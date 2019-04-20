import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import * as dependantsActions  from '../../actions/dependantsActions';
import Loading from '../General/Loading';
import CustomError from '../General/CustomError';
import DependantsTable from './DependantsTable';

class index extends Component {
    componentDidMount(){
        console.log("bbbb")
        if(!this.props.dependants.length )
          {
            this.props.getDependants();
          }
    }

    onDeleteClick() {
        this.props.deleteDependant(this.props.params.id)
        .then(() => {
            this.context.router.push('/');
        })
    }

    showDataInTable = () => (
        this.props.dependants.map((dependant) => (
            <tr key = { dependant._id } >
                <td>{ dependant.nombre_completo }</td>
                <td>{ dependant.edad }</td>
                <td>{ dependant.dependencia }</td>
                <td>
      
                    <Link 
                        to={`/dependants/editar/${dependant._id}`} 
                        className="pointer"
                    >
                        <Icon> &nbsp; edit</Icon>
                    </Link>
                </td>
                <td>
                    <button onClick={this.onDeleteClick.bind(this)} className="btn  pull-xs-right">
                    <Icon>delete</Icon>
                    </button>
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
            return <DependantsTable rows = { this.showDataInTable() } />
    };

    render() {
        return(
            <div className = "container">
                <div className = "display-flex vertical-center">
                    <h2>Dependientes</h2>
                    <Link icon = "add" to = "/dependants/save" className = "btn waves-effect waves-light btn-large btn-floating left-space red">
                        <i className = "material-icons">add</i>
                    </Link>
                </div>
                { this.loadContent() }
            </div>
        );
    }

}

const mapStateToProps = ({ dependantsReducer }) => dependantsReducer;

export default connect(mapStateToProps, dependantsActions)(index);