import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button } from 'react-materialize';
import * as commentsActions from '../../actions/commentsActions';
import { CHANGEEMAIL, CHANGECOMMENT } from '../../types/commentTypes';
import Loading from '../General/Loading';

class Save extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;

        if (id) {
            this.props.getComment(id);
        }
        else {
            this.props.changeInput(CHANGEEMAIL, '');
            this.props.changeInput(CHANGECOMMENT, '');
        }
    }

    changeInput = (event, type) => {
        this.props.changeInput(type, event.target.value);
    }

    saveComment = (event) => {
        const comment = {
            title: this.props.email,
            body: this.props.body
        };

        const id = this.props.match.params.id;
        
        if (id) {
            this.props.edit(comment, id);
        }
        else {
            this.props.add(comment);
        }
    }

    render() {
        return(
            <div className = "container">
                <div className = "row top-space">
                    <Input
                        s = { 12 }
                        label = "Email"
                        value = { this.props.email }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGEEMAIL);
                            } 
                        }
                    >
                        <Icon className = "material-icons">email</Icon>
                    </Input>
                    <Input
                        s = { 12 }
                        label = "Comment"
                        type = "textarea"
                        value = { this.props.body }
                        onChange = {
                            (event) => {
                                this.changeInput(event, CHANGECOMMENT);
                            }
                        }
                    >
                        <Icon className = "material-icons">reorder</Icon>
                    </Input>
                </div>
                <div className = "display-flex horizontal-center">
                    <Button
                        waves = "light"
                        onClick = { this.saveComment }
                        className = { (this.props.loading) ? "disabled" : "" }
                    >
                        Save
                        <Icon left>save</Icon>
                    </Button>
                </div>
                { (this.props.loading) ? <Loading /> : "" }
            </div>
        );
    }
};

const mapStateToProps = ({ commentsReducer }) => commentsReducer;

export default connect(mapStateToProps, commentsActions)(Save);