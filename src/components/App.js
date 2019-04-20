import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Save from'./Users/Save';
import Dependants from './Dependants';
import SaveDependants from './Dependants/SaveDependants';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Menu />
                        <div>
                            <Switch>
                                <Route exact path = "/" component = { Users } />
                                <Route exact path='/users/save' component={ Save }/>
                                <Route exact path='/users/editar/:id' component={ Save }/>
                                <Route exact path='/dependants/editar/:id' component={ SaveDependants }/> 
                                <Route exact path='/dependants/save' component={ SaveDependants }/>   
                                <Route exact path='/dependants/show' component={ Dependants }/>                                                               
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;