import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import SaveUser from './Users/SaveUser';
import Dependents from './Dependents';
import SaveDependent from './Dependents/SaveDependent';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Menu />
                        <div>
                            <Route exact path = "/" component = { Users } />
                            <Route exact path = "/users/new" component = { SaveUser } />
							<Route exact path = "/users/edit/:userId" component = { SaveUser } />
                            <Route exact path = "/dependents" component = { Dependents } />
                            <Route exact path = "/dependents/edit/:dependentId" component = { SaveDependent } />
                            <Route exact path = "/users/:userId/dependents" component = { Dependents } />
                            <Route exact path = "/users/:userId/dependents/new" component = { SaveDependent } />
                            <Route exact path = "/users/:userId/dependents/edit/:dependentId" component = { SaveDependent } />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;