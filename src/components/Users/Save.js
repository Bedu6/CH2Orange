import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row} from 'react-materialize';
import * as usersActions from '../../actions/usersActions';
import { CHANGENAME, CHANGEFIRSTLASTNAME, CHANGESECONDLASTNAME, CHANGEAGE } from '../../types/usersTypes';
import Loading from '../General/Loading';

class Save extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;

        if (id) {
            this.props.getUser(id);
            console.log(id);
        }
        else {
        	this.props.changeInput(CHANGENAME, '');
            this.props.changeInput(CHANGEFIRSTLASTNAME, '');
            this.props.changeInput(CHANGESECONDLASTNAME, '');
            this.props.changeInput(CHANGEAGE, '');
        }
    }

    localChangeInput = (event, type) => {
        this.props.changeInput(type, event.target.value);
    }

    saveUser = (event) => {
        const user = {
            firstLastName:  this.props.firstLastName,
            secondLastName: this.props.secondLastName,
            name:           this.props.name,
            age:            this.props.age  
        };

        const id = this.props.match.params.id;
        
        if (id) {
            this.props.updateUser(user, id);
        }
        else {
            this.props.createUser(user);
        }
    }

    render() {
        return(
            <div>
                <div className='row'>
                    <Input
                        s = { 12 }
                        label = "Apellido Paterno"
                        value = { this.props.firstLastName }
                        onChange = {
                            (event) => {
                                this.localChangeInput(event, CHANGEFIRSTLASTNAME)
                            } 
                        }
                    >
                        <Icon>face</Icon>
                    </Input>
                    <Input
                        s = { 12 }
                        label = "Apellido Materno"
                        value = { this.props.secondLastName }
                        onChange = {
                            (event) => {
                                this.localChangeInput(event, CHANGESECONDLASTNAME)
                            }
                        }
                    >
                        <Icon>face</Icon>
                    </Input>
                </div>

                <Row>
                    <Input
                        s = { 12 }
                        label = "Nombre"
                        value = { this.props.name }
                        onChange = {
                            (event) => {
                                this.localChangeInput(event, CHANGENAME);
                            } 
                        }
                    >
                        <Icon>face</Icon>
                    </Input>
                    <Input
                        s = { 12 }
                        label = "Edad"
                        value = { this.props.age }
                        onChange = {
                            (event) => {
                                this.localChangeInput(event, CHANGEAGE);
                            }
                        }
                    >
                        <Icon>input</Icon>
                    </Input>
                </Row>

                <div className = "display-flex horizontal-center">
                    <Button
                        waves = "light"
                        onClick = { this.saveUser }
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

const mapStateToProps = ({ usersReducer }) => usersReducer;

export default connect(mapStateToProps, usersActions)(Save);          
