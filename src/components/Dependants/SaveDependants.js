import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Icon, Button, Row} from 'react-materialize';
import * as dependantsActions from '../../actions/dependantsActions';
import { CHANGENAME, CHANGEDEPENDENCY, CHANGEAGE } from '../../types/dependantsTypes';
import Loading from '../General/Loading';

class SaveDependants extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;

        if (id) {
            this.props.getDependant(id);
            console.log(id);
        }
        else {
        	this.props.changeInput(CHANGENAME, '');
            this.props.changeInput(CHANGEAGE, '');
            this.props.changeInput(CHANGEDEPENDENCY, '');
        }
    }

    localChangeInput = (event, type) => {
        this.props.changeInput(type, event.target.value);
    }

    saveDependant = (event) => {
        const user = {
            name:       this.props.name,
            dependency: this.props.dependency,
            age:        this.props.age  
        };

        const id = this.props.match.params.id;
        
        if (id) {
            this.props.updateDependant(user, id);
        }
        else {
            this.props.createDependant(user);
        }
    }

    render() {
        return(
            <div>
                <div className='row'>
                    <Input
                        s = { 12 }
                        label = "Nombre"
                        value = { this.props.name }
                        onChange = {
                            (event) => {
                                this.localChangeInput(event, CHANGENAME)
                            } 
                        }
                    >
                        <Icon>face</Icon>
                    </Input>
                    <Input
                        s = { 12 }
                        label = "Dependencia"
                        value = { this.props.dependency }
                        onChange = {
                            (event) => {
                                this.localChangeInput(event, CHANGEDEPENDENCY)
                            }
                        }
                    >
                        <Icon>face</Icon>
                    </Input>
                </div>

                <Row>
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
                        onClick = { this.saveDependant }
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

const mapStateToProps = ({ dependantsReducer }) => dependantsReducer;

export default connect(mapStateToProps, dependantsActions)(SaveDependants);          
