import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
import * as commentsActions from '../../actions/commentsActions';
import Loading from '../General/Loading';
import CustomError from '../General/CustomError';
import CommentsTable from './CommentsTable';
// import Save from './Save';

class index extends Component {

    componentDidMount() {
        if (! this.props.comments.length) {
            this.props.getComments();
        }
    }

    showDataInTable = () => (
        this.props.comments.map((comment) => (
            <tr key = { comment.id } >
                <td>{ comment.email }</td>
                <td>{ comment.body }</td>
                <td>
                    <Link
                        to = { `/comments/edit/${ comment.id }` }
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
            return <CommentsTable rows = { this.showDataInTable() } />
    };

    render() {
        return(
            <div className = "container">
                <div className = "display-flex vertical-center">
                    <h2>Comments</h2>
                    <Link icon = "add" to = "/comments/save" className = "btn waves-effect waves-light btn-large btn-floating left-space red">
                        <i className = "material-icons">add</i>
                    </Link>
                </div>
                { this.loadContent() }
            </div>
        );
    }

}

const mapStateToProps = ({ commentsReducer }) => commentsReducer;

export default connect(mapStateToProps, commentsActions)(index);