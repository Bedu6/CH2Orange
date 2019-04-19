import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Agregar from './Users/Agregar'
import Dependents from './Dependents/index.js';
import Added from './Dependents/Added';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Menu />
                        <div>
                            <Route exact path = "/" component = { Users } />
                            <Route exact path = "/users/agregar" component = { Agregar } />
                            <Route exact path = "/users/edit/:id" component ={ Agregar } />
                            <Route exact path = "/dependents/index/:user_id" component={ Dependents } />
                            <Route exact path='/dependents/edit/:id' component={ Dependents} />


                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;